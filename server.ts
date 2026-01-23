import { serve } from "bun";
import index from "./src/index.html";

const server = serve({
    routes: {
        "/": index
    }
})

console.log(`Morphaweb is running at: http://localhost:${server.port} (Cmd+click to open)`);