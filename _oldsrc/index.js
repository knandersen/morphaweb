import Morphaweb from './Morphaweb'
import version from 'bundle-text:../assets/VERSION.txt'

const morphaweb = new Morphaweb()

const versionElement = document.getElementById('version')
versionElement.textContent = version