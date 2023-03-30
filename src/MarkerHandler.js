import { v4 as uuidv4 } from 'uuid';

export default class MarkerHandler {
    constructor(morphaweb){
        this.color = '#ff990a'
        this.colorHighlight = "#ff1111"
        this.colorTopMarker = "#ff00bb"
        this.markers = morphaweb.wavesurfer.markers;

        this.morphaweb = morphaweb
        this.morphaweb.wavesurfer.on('marker-click',this.onClick.bind(this))
    }

    addMarkers = (markers) => {
        for (let marker of markers) {
            this.createMarker(marker.position / 1000)
        }
    }
    removeTopMarker() {
        const i = this.markers.markers.map(m => m.position).indexOf('top')
        this.morphaweb.wavesurfer.markers.remove(i)
    }

    removeSelectedMarker() {
        const i = this.getSelectedMarkerIndex()
        this.markers.remove(i)
    }

    highlightMarker(time) {
        this.markers.markers.map(m => {
            if(m.position=="bottom"){
                if(m.time == time) {
                    m.el.children[1].children[0].children[0].setAttribute('fill', this.colorHighlight)
                } else {
                    m.el.children[1].children[0].children[0].setAttribute('fill', this.color)
                }       
            }
        })
    }

    getBottomMarkers() {
        return this.markers.markers.filter(m => m.position === "bottom")
    }

    getTopMarkers() {
        return this.markers.markers.filter(m => m.position === "top")
    }

    getSelectedMarker() {
        const selectedMarker = this.markers.markers.filter(m => m.el.children[1].children[0].children[0].getAttribute('fill') === this.colorHighlight)[0]
        return selectedMarker;
    }
    getSelectedMarkerIndex() {
        const selectedMarker = this.getSelectedMarker()
        return this.markers.markers.findIndex(m => m === selectedMarker)
    }

    getMarkerAtTime(time) {
        const bottomMarkers = this.getBottomMarkers()
        return bottomMarkers.indexOf(time)
    }
    
    createMarker(time,type="bottom") {
        if(type == "bottom" && this.getMarkerAtTime(time) != -1) {return false}
        let o = {
            time: time,
            position: "bottom",
            color: this.color,
            uuid: uuidv4(),
            draggable:true
        }
        if(type == "top") {
            o.position = "top",
            o.color = this.colorTopMarker
        }
        this.morphaweb.wavesurfer.addMarker(o)
    }
    
    createMarkerAtCurrentPosition() {
        this.createMarker(this.morphaweb.playOffset * this.morphaweb.wavesurfer.getDuration(),"bottom")
    }

    onClick(e) {
        this.highlightMarker(e.time)
    }   
}