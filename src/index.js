import Morphaweb from './Morphaweb'
import { version } from '../package.json'

const morphaweb = new Morphaweb()

const versionElement = document.getElementById('version')
versionElement.textContent = version

const ws = new WebSocket(`ws://${window.location.host}`)

ws.onopen = () => {
  console.log('WebSocket connection established')
}

// Send a shutdown message when the user leaves the page
window.addEventListener('beforeunload', () => {
    console.log('Sending shutdown message to server')
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('shutdown');
    }
});