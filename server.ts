import { serve } from "bun";
import { version } from './package.json'
import index from "./src/index.html";

const openBrowser = (url: string) => {
    const platform = process.platform
    let command: string;
    
    if (platform === "darwin") {
        command = "open";
    } else if (platform === "win32") {
        command = "start";
    } else {
        command = "xdg-open";
    }
    
    Bun.spawn([command, url]);
}

const server = serve({
    routes: {
        "/": index
    }
})

const url = `http://localhost:${server.port}`;

console.log(`Morphaweb v${version} is running at: ${url} (Cmd+click to open). `);
console.log(`Attempting to start in your default browser...`);

openBrowser(url)