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
            name: 'en-US-Wavenet-F'     // Alt US Voices: 'A & D' Male, 'F & C' Female, 'E' Neutral
        },
        audioConfig: { audioEncoding: 'MP3' }
    };

    const [response] = await client.synthesizeSpeech(request as any);

    const fs = require('fs');
    fs.writeFileSync('speech.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: speech.mp3');
}