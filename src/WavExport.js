import { WaveFile } from "wavefile";
import { saveAs } from "file-saver";


export default class WavExport {
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