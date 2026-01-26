import Morphaweb from './Morphaweb'
import { version } from '../package.json'

const morphaweb = new Morphaweb()

const versionElement = document.getElementById('version')
versionElement.textContent = version