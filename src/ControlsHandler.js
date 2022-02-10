import { Morphaweb } from "./Morphaweb";

export class ControlsHandler extends Morphaweb {
    constructor() {
        this.playButton = document.getElementById("play")
        this.pauseButton = document.getElementById("pause")
        this.exportButton = document.getElementById("export")
        
        this.exportButton.addEventListener('click',this.exportWavFile)
        this.playButton.addEventListener('click',this.play)
    }
    exportWavFile = () => {
        const buffer = [
           super.wavesurfer.backend.buffer.getChannelData(0),
           super.wavesurfer.backend.buffer.getChannelData(1)
       ]
       const markers = super.wavesurfer.markers.markers
       wavExport.createFileFromBuffer(buffer,markers)
    }

    play = () => {
        console.log("play")
        if(super.wavesurfer.isPlaying) {
            super.wavesurfer.seekTo(0)
        }
        super.wavesurfer.play()
    }
   
}