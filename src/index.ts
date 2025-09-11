import { convertTextToSpeech } from './tts';
import { convertSpeechToText } from './stt';
import fs from 'fs';

async function main() {
    const ssml = fs.readFileSync('text.ssml', 'utf8');
    await convertTextToSpeech(ssml);
    await convertSpeechToText();
}

main();