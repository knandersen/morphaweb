import { throttle } from "lodash";
export default class ControlsHandler {
    constructor(morphaweb) {
        this.morphaweb = morphaweb
        this.playButton = document.getElementById("play")
        this.pauseButton = document.getElementById("pause")
        this.exportButton = document.getElementById("export")
        
        this.exportButton.addEventListener('click',this.exportWavFile)
        this.playButton.addEventListener('click',this.play)

        document.addEventListener('keydown',this.onKeydown.bind(this))
        this.morphaweb.wavesurfer.on('seek',this.onSeek.bind(this))
        this.morphaweb.wavesurfer.on('finish',this.onFinish.bind(this))
        window.addEventListener("wheel",throttle(this.onWheel.bind(this),10))
    }
    exportWavFile = () => {
        const buffer = [
           this.morphaweb.wavesurfer.backend.buffer.getChannelData(0),
           this.morphaweb.wavesurfer.backend.buffer.getChannelData(1)
       ]
       const markers = this.morphaweb.wavesurfer.markers.markers
       this.morphaweb.wavHandler.createFileFromBuffer(buffer,markers)
    }

    play = () => {
        if(this.morphaweb.wavesurfer.isPlaying) {
            this.morphaweb.wavesurfer.seekTo(0)
        }
        this.morphaweb.wavesurfer.play()
    }

    onSeek = (p) => {
        this.morphaweb.playOffset = p
        this.morphaweb.markerHandler.removeMarker("top")
        this.morphaweb.markerHandler.createMarker(this.morphaweb.playOffset * this.morphaweb.wavesurfer.getDuration(),"top")
        this.morphaweb.wavesurfer.play()
    }
    
    onFinish = () => {
        // Do nothing
    }
    
    onWheel = (e) => {
        if(this.morphaweb.scrollPos + e.deltaY >= this.morphaweb.scrollMin) {
            this.morphaweb.scrollPos = this.morphaweb.scrollPos + e.deltaY
            this.morphaweb.wavesurfer.zoom(this.morphaweb.scrollPos)
        }
    }
    
    onKeydown = (e) => {
        switch(e.key) {
            case "m":
                this.morphaweb.markerHandler.createMarkerAtCurrentPosition()
                break;
            case "p":
                //playFromCursor()
                break;
        }
    }
   
}