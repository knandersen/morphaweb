import WaveSurfer from "wavesurfer.js"
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";
import { throttle } from "lodash";
import WavExport from "./WavExport";
import { WaveFile } from "wavefile";

const w = new URL('../assets/export-19.wav',import.meta.url)

const wavExport = new WavExport()

const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause")
const exportButton = document.getElementById("export")
const container = document.getElementById("container")
let scrollPos = 0
let scrollMin = 0
let activeFile = null

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'black',
    //backend:"MediaElement",
    progressColor: 'purple',
    plugins: [
        MarkersPlugin.create()
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

const createMarker = (time,type="bottom") => {
    let o = {
        time: time,
        position: "bottom",
        color: '#ff990a',
        draggable:true
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
    loadMarkersFromFile(activeFile)
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

const loadMarkersFromFile = (file) => {
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onloadend = () => {
        let f = new WaveFile()
        const base64String = fr.result
        .replace("data:", "")
        .replace(/^.+,/, "");
        f.fromBase64(base64String)
        const cues = f.listCuePoints()
        for (let marker of cues) {
            createMarker(marker.position / 1000)
        }
    }
}


const onDrop = (e) => {
    e.preventDefault()
    if(e.dataTransfer.files.length > 1) {
        console.log(e.dataTransfer.files)
    } else {
        activeFile = e.dataTransfer.files[0]
    }
    wavesurfer.loadBlob(activeFile)
}
document.addEventListener("drop",onDrop)