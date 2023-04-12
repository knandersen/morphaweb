import Crunker from 'crunker'
export default class DropHandler {
    constructor(morphaweb) {
        this.morphaweb = morphaweb
        this.overlay = document.getElementById("overlay")
        this.crunker = new Crunker({sampleRate:48000})
        
        document.addEventListener("dragover", this.allowDrop.bind(this))
        document.addEventListener("drop", this.onDrop.bind(this))
    }

    allowDrop(e) {
        this.overlayShow()
        e.preventDefault()
    }

    async loadFiles(files) {
        let audioBuffers = []
        let audioCtx = new AudioContext()
        let markers = []
        let offset = 0
        const fileArray = [...files]
        const promise = fileArray.map(async file => {
            await file.arrayBuffer().then(async buf => {
                const p = await audioCtx.decodeAudioData(buf).then(async buf => {
                    let m = await this.morphaweb.wavHandler.getMarkersFromFile(file)
                    m = m.map((mm,i) => {
                        mm.position += offset
                        return mm
                    })
                    markers.push(...m)
                    // add marker between multiple files
                    markers.push({position: buf.duration*1000})
                    offset += buf.duration*1000
                    audioBuffers.push(buf)
                },() => {
                    this.morphaweb.track("ErrorFileUploadMarkers")
                })
                return p;
            }, () => {
                this.morphaweb.track("ErrorFileUpload")
            })
        })
        const resolvedPromises = await Promise.all(promise)
        markers.pop()
        const concatted = this.crunker.concatAudio(audioBuffers)
        const ex = this.crunker.export(concatted,"audio/wav")
        const obj = {
            blob: ex.blob,
            markers: markers
        }
        return obj
    }
    
    onDrop(e) {
        e.preventDefault()
        this.overlayHide()
        this.morphaweb.wavesurfer.clearMarkers()
        this.loadFiles(e.dataTransfer.files).then(res => {
            this.morphaweb.wavesurfer.loadBlob(res.blob)
            this.morphaweb.wavHandler.markers = res.markers
        })
    }


    overlayShow() {
        this.overlay.style.display = 'block'
    }

    overlayHide() {
        this.overlay.style.display = 'none'
    }
}