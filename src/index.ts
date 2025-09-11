import path from 'path';
import fs from 'fs';
import { convertTextToSpeech } from './tts';
import { convertSpeechToText } from './stt';

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Usage: npm start -- <inputFile>');
        process.exit(1);
    }

    const inputFile = args[0];
    const ext = path.extname(inputFile).toLowerCase();
    const baseName = path.basename(inputFile, ext);

    // Ensure folders exist
    fs.mkdirSync('mp3', { recursive: true });
    fs.mkdirSync('texts', { recursive: true });
    fs.mkdirSync('transcriptions', { recursive: true });

    // Copy input file to texts folder if not already there
    if (!inputFile.startsWith('texts' + path.sep)) {
        fs.copyFileSync(inputFile, path.join('texts', path.basename(inputFile)));
    }

    const inputPath = path.join('texts', path.basename(inputFile));
    const content = fs.readFileSync(inputPath, 'utf8');

    // Determine if input is SSML or plain text
    const isSSML = content.trim().startsWith('<speak>') && content.trim().endsWith('</speak>');

    // Generate MP3 file
    const mp3Path = path.join('mp3', `${baseName}toSpeech.mp3`);
    await convertTextToSpeech(content, mp3Path, isSSML);

    // Generate transcription
    const transcriptionPath = path.join('transcriptions', `${baseName}toText.txt`);
    await convertSpeechToText(mp3Path, transcriptionPath);

    console.log(`MP3 saved to: ${mp3Path}`);
    console.log(`Transcription saved to: ${transcriptionPath}`);
}

main();