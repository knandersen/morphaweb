export default class DropHandler {
    constructor(morphaweb) {
        this.morphaweb = morphaweb
        this.overlay = document.getElementById("overlay")
        
        document.addEventListener("dragover", this.allowDrop.bind(this))
        document.addEventListener("drop", this.onDrop.bind(this))
    }

    allowDrop(e) {
        this.overlayShow()
        e.preventDefault()
    }
    
    onDrop(e) {
        e.preventDefault()
        this.overlayHide()
        if(e.dataTransfer.files.length > 1) {
            console.log(e.dataTransfer.files)
        } else {
            this.morphaweb.activeFile = e.dataTransfer.files[0]
        }
        this.morphaweb.wavesurfer.loadBlob(this.morphaweb.activeFile)
    }


    overlayShow() {
        this.overlay.style.display = 'block'
    }

    overlayHide() {
        this.overlay.style.display = 'none'
    }
}