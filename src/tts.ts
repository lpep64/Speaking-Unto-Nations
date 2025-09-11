import fs from 'fs';
import textToSpeech from '@google-cloud/text-to-speech';

const client = new textToSpeech.TextToSpeechClient();

function extractVoiceNameFromSSML(ssml: string): string | null {
    const match = ssml.match(/<voice\s+name=["']([^"']+)["']/i);
    return match ? match[1] : null;
}

export async function convertTextToSpeech(input: string, outputPath: string, isSSML: boolean) {
    let voiceName = 'en-US-Wavenet-A';

    if (isSSML) {
        const extracted = extractVoiceNameFromSSML(input);
        if (extracted) {
            voiceName = extracted;
        }
    }

    const request = {
        input: isSSML ? { ssml: input } : { text: input },
        voice: {
            languageCode: 'en-US',
            name: voiceName
        },
        audioConfig: {
            audioEncoding: 'MP3',
            pitch: 0.0,
            speakingRate: 1.0
        }
    };

    const [response] = await client.synthesizeSpeech(request as any);
    if (response.audioContent) {
        fs.writeFileSync(outputPath, response.audioContent, 'binary');
    } else {
        throw new Error('No audio content received from TTS API.');
    }
}