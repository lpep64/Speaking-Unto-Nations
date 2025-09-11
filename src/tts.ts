import fs from 'fs';
import textToSpeech from '@google-cloud/text-to-speech';
import util from 'util';
import { promisify } from 'util';
import { Readable } from 'stream';

const client = new textToSpeech.TextToSpeechClient();

export async function convertTextToSpeech(ssml: string) {
    const request = {
        input: { ssml },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Wavenet-A'     // Alt US Voices: 'A & D' Male, 'F & C' Female, 'E' Neutral
        },
        audioConfig: {
            audioEncoding: 'MP3',
            pitch: -4.0, // Lower pitch for a deeper voice
            speakingRate: 0.8 // Normal speaking rate
        }
    };

    const [response] = await client.synthesizeSpeech(request as any);

    const fs = require('fs');
    fs.writeFileSync('speech.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: speech.mp3');
}