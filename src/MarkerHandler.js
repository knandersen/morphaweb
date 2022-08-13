import { v4 as uuidv4 } from 'uuid';

export default class MarkerHandler {
    constructor(morphaweb){
        this.color = '#ff990a'
        this.colorHighlight = "#3333ff"

        this.morphaweb = morphaweb
        this.morphaweb.wavesurfer.on('marker-click',this.onClick.bind(this))
    }

    addMarkers = (markers) => {
        for (let marker of markers) {
            this.createMarker(marker.position / 1000)
        }
    }
    removeTopMarker() {
        const i = this.morphaweb.wavesurfer.markers.markers.map(m => m.position).indexOf('top')
        this.morphaweb.wavesurfer.markers.remove(i)
    }

    removeSelectedMarker() {
        const sel = this.morphaweb.wavesurfer.markers.selectedMarker
        const i = this.getMarkerAtTime(sel.time)
        this.morphaweb.wavesurfer.markers.remove(i)
    }

    highlightMarker(time) {
        this.morphaweb.wavesurfer.markers.markers.map(m => {
            if(m.position=="bottom"){
                if(m.time == time) {
                    m.el.children[1].children[0].children[0].setAttribute('fill',this.colorHighlight)
                } else {
                    m.el.children[1].children[0].children[0].setAttribute('fill',this.color)
                }       
            }
        })
    }

    getMarkerAtTime(time) {
        return this.morphaweb.wavesurfer.markers.markers.map(m => {
            if(m.position == "bottom") { return m.time }
        }).indexOf(time)
    }
    
    createMarker(time,type="bottom") {
        if(this.getMarkerAtTime(time) != -1) {return false}
        let o = {
            time: time,
            position: "bottom",
            color: this.color,
            uuid: uuidv4(),
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

    onClick(e) {
        this.highlightMarker(e.time)
    }   
}