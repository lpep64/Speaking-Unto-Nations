import fs from 'fs';
import speech from '@google-cloud/speech';

const client = new speech.SpeechClient();

export async function convertSpeechToText(mp3Path: string, outputPath: string) {
    const audioBytes = fs.readFileSync(mp3Path).toString('base64');
    const request = {
        audio: { content: audioBytes },
        config: {
            encoding: 'MP3',
            sampleRateHertz: 16000,
            languageCode: 'en-US'
        }
    };

    const [response] = await client.recognize(request as any);
    const transcription = response.results?.map(r => r.alternatives?.[0].transcript).join('\n') || '';
    fs.writeFileSync(outputPath, transcription, 'utf8');
}