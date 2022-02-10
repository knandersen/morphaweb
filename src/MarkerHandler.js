import { Morphaweb } from "./Morphaweb";

export class MarkerHandler extends Morphaweb {
    addMarkers = (markers) => {
        for (let marker of markers) {
            this.createMarker(marker.position / 1000)
        }
    }
    removeMarker(type) {
        const i = super.wavesurfer.markers.markers.map(m => m.position).indexOf('top')
        super.wavesurfer.markers.remove(i)
    }
    
    createMarker(time,type="bottom") {
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
        super.wavesurfer.addMarker(o)
    }
    
    createMarkerAtCurrentPosition() {
        createMarker(playOffset * super.wavesurfer.getDuration(),"bottom")
    }
}