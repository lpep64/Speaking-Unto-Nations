# Speaking Unto Nations: a gcloud-speech-app

This project utilizes the Google Cloud Text-to-Speech and Speech-to-Text APIs to convert text or SSML files into audio (MP3) and transcriptions.

## Project Structure

```
gcloud-speech-app
├── src
│   ├── index.ts         # Main entry point, handles CLI and workflow
│   ├── tts.ts           # Text-to-Speech functionality
│   ├── stt.ts           # Speech-to-Text functionality
│   └── types
│       └── index.ts     # Type definitions for API responses
├── texts/               # Input text and SSML files
│   └── example.txt
│   └── example.ssml
├── mp3/                 # Output MP3 files
│   └── example.mp3
├── transcriptions/      # Output transcription files
│   └── example.txt
├── package.json         # NPM package configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/lpep64/Speaking-Unto-Nations.git
   cd gcloud-speech-app
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up Google Cloud credentials:**

   - Create a Google Cloud project and enable the Text-to-Speech and Speech-to-Text APIs.
   - Download the service account key JSON file and set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to this file:
     ```
     $env:GOOGLE_APPLICATION_CREDENTIALS="PATH of Google Cloud Key JSON File"
     ```

## Usage

1. **Prepare your input file:**
   - Place your `.txt` or `.ssml` file in the `texts/` folder.

2. **Run the application:**
   ```
   npm start -- texts/example.txt
   ```
   or
   ```
   npm start -- texts/example.ssml
   ```

   - The program will automatically detect if the input is plain text or SSML.
   - If the SSML file contains a `<voice name="">` tag, that voice will be used; otherwise, the default `en-US-Wavenet-A` is used.

3. **Outputs:**
   - The generated MP3 file will be saved in the `mp3/` folder.
   - The transcription will be saved in the `transcriptions/` folder.

## License

This project is licensed under the MIT License.