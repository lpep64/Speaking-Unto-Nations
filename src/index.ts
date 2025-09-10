import { convertTextToSpeech } from './tts';
import { convertSpeechToText } from './stt';
import fs from 'fs';

async function main() {
    const text = fs.readFileSync('text.txt', 'utf8');
    await convertTextToSpeech(text); 
    await convertSpeechToText();
}

main();