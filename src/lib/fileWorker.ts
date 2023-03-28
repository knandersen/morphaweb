export function decodeBase64AudioData(
    audioCtx: AudioContext,
    base64String: string
): Promise<AudioBuffer> {
    const binaryString = atob(base64String.split(",")[1]);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const audioBuffer = audioCtx.decodeAudioData(bytes.buffer);
    return audioBuffer;
}

onmessage = async (e) => {
    const filePath = e.data.filePath;
    const audioCtx = new (self.AudioContext || self.webkitAudioContext)();
    console.log(e);

    const request = new XMLHttpRequest()
    request.open('GET', filePath, false)
    request.responseType = 'blob'
    request.send(null)

    if (request.status === 200) {
        const fileReader = new FileReaderSync();
        const fileContent = fileReader.readAsDataURL(request.response);
        console.log("blef");
        console.log(decodeBase64AudioData(audioCtx, fileContent));
        postMessage(fileContent);
    }
    console.log(request);

    postMessage("error")
}
