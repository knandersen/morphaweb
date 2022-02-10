import WaveSurfer from "wavesurfer.js"
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";
import DropHandler from "./DropHandler";
//import {ControlsHandler} from "./ControlsHandler";
//import { MarkerHandler } from "./MarkerHandler";

export default class Morphaweb {
    constructor() {
        this.scrollPos = 0
        this.scrollMin = 0
        this.activeFile = null
        this.playOffset = 0
        this.dropHandler = new DropHandler()

        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'black',
            progressColor: 'purple',
            plugins: [MarkersPlugin.create()]    
        });


        this.wavesurfer.on('ready',this.onReady)
    }

    onReady = async () => {
        scrollMin = Math.round(wavesurfer.container.scrollWidth / wavesurfer.getDuration())
        scrollPos = scrollMin
        wavHandler.loadMarkersFromFile(activeFile,addMarkers)
    }
}