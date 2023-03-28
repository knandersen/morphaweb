import Worker from "$lib/fileWorker?worker";

export function getSampleValue(
    audioBuffer: AudioBuffer,
    channel: number = 0,
    position: number = 0
): number {
    const sampleRate = audioBuffer.sampleRate;
    const channelData = audioBuffer.getChannelData(channel);
    const sampleIndex = Math.round(position * sampleRate);
    return channelData[sampleIndex];
}

export function loadAudioFile(filePath: string) {
    const worker = new Worker();

    worker.onmessage = function (this, e) {
        const base64String = e.data;

        if (base64String === "error") {
            console.log("error")
            return false;
        } else {
            console.log(e)
            /*  audioBuffer = decodeBase64AudioData(audioCtx, base64String);
             audioBuffer.then((audioBuffer) => {
                 const sampleValue = getSampleValue(audioBuffer, 0, 0);
                 console.log(`Sample value: ${sampleValue}`);
             }); */
        }
    };
    worker.postMessage({ filePath: filePath,/*  audioContext: audioContext */ });

    /*     return audioBuffer; */
}