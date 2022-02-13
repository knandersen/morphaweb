export default class DropHandler {
    constructor(morphaweb) {
        this.morphaweb = morphaweb
        document.addEventListener("dragover", this.allowDrop)
        document.addEventListener("drop", this.onDrop.bind(this))
    }

    allowDrop(e) {
        e.preventDefault()
    }
    
    onDrop(e) {
        e.preventDefault()
        if(e.dataTransfer.files.length > 1) {
            console.log(e.dataTransfer.files)
        } else {
            this.morphaweb.activeFile = e.dataTransfer.files[0]
        }
        this.morphaweb.wavesurfer.loadBlob(this.morphaweb.activeFile)
    }
    
}