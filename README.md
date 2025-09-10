# gcloud-speech-app

This project utilizes the Google Cloud Text-to-Speech and Speech-to-Text APIs to convert text from a file into audio and vice versa.

## Project Structure

```
gcloud-speech-app
├── src
│   ├── index.ts         # Entry point of the application
│   ├── tts.ts           # Text-to-Speech functionality
│   ├── stt.ts           # Speech-to-Text functionality
│   └── types
│       └── index.ts     # Type definitions for API responses
├── text.txt             # Input text file for conversion
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
     $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\lukep\Documents\Speaking-Unto-Nations\speaking-unto-nations-c28f2fa8530e.json"
     ```

## Usage

1. **Convert text to speech:**

   - Ensure `text.txt` contains the text you want to convert.
   - Run the application:
     ```
     npm start
     ```
   - This will generate an audio file named `speech.mp3`.
2. **Convert speech to text:**

   - Ensure `speech.mp3` is available in the project directory.
   - Run the application again to convert the audio back to text.

## License

This project is licensed under the MIT License.
