import WaveSurfer from "wavesurfer.js"
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";
import { throttle } from "lodash";
import WavExport from "./WavExport";

const wavExport = new WavExport()

const playButton = document.querySelector("#play")
const pauseButton = document.querySelector("#pause")
const exportButton = document.querySelector("#export")
const container = document.querySelector("#container")
let scrollPos = 0
let scrollMin = 0

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'black',
    height:300,
    //backend:"MediaElement",
    progressColor: 'purple',
    plugins: [
        MarkersPlugin.create({
            markers: []
        })
]    
});

const onMarkerClick = (e) => {
    console.log(e)
}

wavesurfer.on("marker-click",onMarkerClick)
wavesurfer.on('error', function(e) {
    console.warn(e);
});
wavesurfer.on('marker-drag', function(marker) {
    console.log("marker drag", marker.label);
});

wavesurfer.on('marker-drop', function(marker) {
    console.log("marker drop", marker.label);
});

const play = () => {
    console.log("play")
    if(wavesurfer.isPlaying) {
        wavesurfer.seekTo(0)
    }
    wavesurfer.play()
}
playButton.addEventListener('click',play)

const exportWavFile = () => {
     const buffer = [
        wavesurfer.backend.buffer.getChannelData(0),
        wavesurfer.backend.buffer.getChannelData(1)
    ]
    const markers = wavesurfer.markers.markers
    wavExport.createFileFromBuffer(buffer,markers)
}
exportButton.addEventListener('click',exportWavFile)

const removeMarker = (type) => {
    const i = wavesurfer.markers.markers.map(m => m.position).indexOf('top')
    wavesurfer.markers.remove(i)
}

const createMarker = (time,type) => {
    let o = {
        time: time,
        position: "bottom",
        color: '#ff990a'
    }
    if(type == "top") {
        o.position = "top",
        o.color = '#00ffcc'
    }
    wavesurfer.addMarker(o)

}

const createMarkerAtCurrentPosition = () => {
    createMarker(playOffset * wavesurfer.getDuration(),"bottom")
}
let playOffset=0
const onSeek = (p) => {
    playOffset = p
    removeMarker("top")
    createMarker(playOffset * wavesurfer.getDuration(),"top")
    wavesurfer.play()
}

const onFinish = () => {
    // Do nothing
}

wavesurfer.on('seek',onSeek)
wavesurfer.on('finish',onFinish)

const onWheel = (e) => {
    if(scrollPos + e.deltaY >= scrollMin) {
        scrollPos = scrollPos + e.deltaY
        wavesurfer.zoom(scrollPos)
    }
}

window.addEventListener("wheel",throttle(onWheel,10))

const onReady = () => {
    scrollMin = Math.round(wavesurfer.container.scrollWidth / wavesurfer.getDuration())
    scrollPos = scrollMin
    console.log(wavesurfer)
}
wavesurfer.on('ready',onReady)

const onKeydown = (e) => {
    switch(e.key) {
        case "m":
            createMarkerAtCurrentPosition()
            break;
        case "p":
            //playFromCursor()
            break;
    }
}

document.addEventListener('keydown',onKeydown)

const allowDrop = (e) => {
    e.preventDefault()
}
document.addEventListener("dragover",allowDrop)

const onDrop = (e) => {
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    wavesurfer.loadBlob(file)    
}
container.addEventListener("drop",onDrop)