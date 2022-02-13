export default class MarkerHandler {
    constructor(morphaweb){
        this.morphaweb = morphaweb
    }

    addMarkers = (markers) => {
        for (let marker of markers) {
            this.createMarker(marker.position / 1000)
        }
    }
    removeMarker(type) {
        const i = this.morphaweb.wavesurfer.markers.markers.map(m => m.position).indexOf('top')
        this.morphaweb.wavesurfer.markers.remove(i)
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
        this.morphaweb.wavesurfer.addMarker(o)
    }
    
    createMarkerAtCurrentPosition() {
        this.createMarker(this.morphaweb.playOffset * this.morphaweb.wavesurfer.getDuration(),"bottom")
    }
}