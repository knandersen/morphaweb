import { WaveFile } from "wavefile";
import { saveAs } from "file-saver";

export default class WavHandler {

    async loadMarkersFromFile (file,callback) {
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
            callback(cues)
        }
    }

    createFileFromBuffer(buffer,markers) {
        let file = new WaveFile()
        file.fromScratch(2, 48000, '32f', buffer)

        for (let marker of markers) {
            if(marker.position != "top") {
                file.setCuePoint({
                    position: marker.time*1000
                })
            }
        }
        const data = file.toDataURI()
        saveAs(data,"export.wav")
    }
}