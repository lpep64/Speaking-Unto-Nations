import fs from 'fs';
import textToSpeech from '@google-cloud/text-to-speech';
import util from 'util';
import { promisify } from 'util';
import { Readable } from 'stream';

const client = new textToSpeech.TextToSpeechClient();

export async function convertTextToSpeech(text: string) {
    const request = {
        input: { text },
        voice: {
            languageCode: 'en-US',      // Change language here
            ssmlGender: 'FEMALE',       // Change gender: 'MALE', 'FEMALE', 'NEUTRAL'
            name: 'en-US-Wavenet-F'     // Optional: specify a voice name
        },
        audioConfig: { audioEncoding: 'MP3' }
    };

    const [response] = await client.synthesizeSpeech(request as any);

    const fs = require('fs');
    fs.writeFileSync('speech.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: speech.mp3');
}