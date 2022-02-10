import { throttle } from "lodash";
import WavHandler from "./WavHandler";
import Morphaweb from './Morphaweb'


const wavHandler = new WavHandler()
const morphaweb = new Morphaweb()

const onSeek = (p) => {
    playOffset = p
    removeMarker("top")
    createMarker(playOffset * morphaweb.wavesurfer.getDuration(),"top")
    morphaweb.wavesurfer.play()
}
morphaweb.wavesurfer.on('seek',onSeek)

const onFinish = () => {
    // Do nothing
}
morphaweb.wavesurfer.on('finish',onFinish)

const onWheel = (e) => {
    if(scrollPos + e.deltaY >= scrollMin) {
        scrollPos = scrollPos + e.deltaY
        morphaweb.wavesurfer.zoom(scrollPos)
    }
}
window.addEventListener("wheel",throttle(onWheel,10))

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
