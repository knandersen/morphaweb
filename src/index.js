import Morphaweb from './Morphaweb'
import * as Panelbear from '@panelbear/panelbear-js'

const morphaweb = new Morphaweb()

/**
 * Tracking
 */

Panelbear.load("z6xwVIhy6M");
Panelbear.trackPageview();

const exportButton = document.getElementById("export")
exportButton.addEventListener("click", (e) => {
    Panelbear.track("export")
})