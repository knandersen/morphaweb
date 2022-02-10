import Morphaweb from "./Morphaweb"

export default class DropHandler extends Morphaweb {
    constructor() {
        super()
        document.addEventListener("dragover",this.allowDrop)
        document.addEventListener("drop",this.onDrop)
        console.log("this happened")
    }

    allowDrop(e) {
        e.preventDefault()
    }
    
    onDrop(e) {
        e.preventDefault()
        if(e.dataTransfer.files.length > 1) {
            console.log(e.dataTransfer.files)
        } else {
            activeFile = e.dataTransfer.files[0]
        }
        super.wavesurfer.loadBlob(activeFile)
    }
    
}