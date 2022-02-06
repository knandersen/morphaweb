/* import WaveformData from 'waveform-data' */
import WaveSurfer from "wavesurfer.js"
import MarkersPlugin from "wavesurfer.js/src/plugin/markers";

const w = new URL('../assets/walksign.wav',import.meta.url)
const playButton = document.querySelector("#play")
const pauseButton = document.querySelector("#pause")

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    plugins: [
        MarkersPlugin.create({
            markers: [
                {
                    time: .5,
                    label: "V1",
                    color: '#ff990a'
                },
                {
                    time: 1,
                    label: "V2",
                    color: '#00ffcc',
                    position: 'top'
                }
            ]
        })
]    
});

wavesurfer.load(w.href);

const play = () => {
    console.log("play")
    if(wavesurfer.isPlaying) {
        wavesurfer.seekTo(0)
    }
    wavesurfer.play()
}
playButton.addEventListener('click',play)

const createMarkers = () => {
    console.log(wavesurfer)
}
wavesurfer.on('ready',createMarkers())

/* 
fetch(w.href)
    .then(r => r.arrayBuffer())
    .then(f => {
        console.log(f)
        var wavesurfer = WaveformData.create(f);
    })
 */
//console.log(f)
/* const loadFile = async (url) => {
    const response = await fetch(url)
    return response.blob()
}
 try {
    const f = await loadFile(w.href);
    var wavesurfer = WaveformData.create(f);
} catch(err) {
    throw new Error(err)
}  */