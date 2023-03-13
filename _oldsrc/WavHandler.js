import { WaveFile } from "wavefile";
import { saveAs } from "file-saver";

export default class WavHandler {

    constructor() {
        this.markers = []
    }

    async getMarkersFromFile(file) {
        return new Promise((resolve, reject) => {
            let fr = new FileReader()
            let cues = []
            fr.readAsDataURL(file)
            fr.onloadend = () => {
                let f = new WaveFile()
                const base64String = fr.result
                    .replace("data:", "")
                    .replace(/^.+,/, "");
                f.fromBase64(base64String)
                cues = f.listCuePoints()
                resolve(cues)
            }
            fr.onerror = reject
        })

    }

    createFileFromBuffer(buffer, markers) {
        let file = new WaveFile()
        file.fromScratch(2, 48000, '32f', buffer)

        for (let marker of markers) {
            if (marker.position != "top") {
                file.setCuePoint({
                    position: marker.time * 1000
                })
            }
        }

        for (let i = 0; i < file.cue.points.length; i++) {
            file.cue.points[i].dwPosition = file.cue.points[i].dwSampleOffset
        }

        const data = file.toDataURI()
        saveAs(data, "export.wav")
    }
}