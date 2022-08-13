import WaveSurfer from "wavesurfer.js"
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";
import DropHandler from "./DropHandler";
import ControlsHandler from "./ControlsHandler";
import MarkerHandler from "./MarkerHandler";
import WavHandler from "./WavHandler";


const surl = new URL('../assets/walksign.wav',import.meta.url)
export default class Morphaweb {
    constructor() {
        this.scrollPos = 0
        this.scrollMin = 0
        this.activeFile = null
        this.playOffset = 0
        
        this.wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'black',
            progressColor: 'purple',
            plugins: [MarkersPlugin.create()]    
        });

        this.dropHandler = new DropHandler(this)
        this.markerHandler = new MarkerHandler(this)
        this.controlsHandler = new ControlsHandler(this)
        this.wavHandler = new WavHandler()

        this.wavesurfer.on('ready',this.onReady.bind(this))
    }

    onReady = async () => {
        this.scrollMin = Math.round(this.wavesurfer.container.scrollWidth / this.wavesurfer.getDuration())
        this.scrollPos = this.scrollMin
        this.wavHandler.loadMarkersFromFile(this.activeFile,this.markerHandler.addMarkers)
    }
}