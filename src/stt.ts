import fs from 'fs';
import speech from '@google-cloud/speech';
import path from 'path';

const client = new speech.SpeechClient();

export async function convertSpeechToText() {
    const fs = require('fs');
    const file = fs.readFileSync('speech.mp3');
    const audioBytes = file.toString('base64');

    const request = {
        audio: { content: audioBytes },
        config: {
            encoding: 'MP3', // Use enum value
            sampleRateHertz: 16000,
            languageCode: 'en-US',
        },
    };

    const [response] = await client.recognize(request as any); // Cast to any to avoid strict type errors

    const transcription = (response.results ?? [])
        .map((result: any) => result.alternatives[0].transcript)
        .join('\n');
    fs.writeFileSync('transcription.txt', transcription);
    console.log('Transcription written to file: transcription.txt');
}