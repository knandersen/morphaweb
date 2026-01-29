import { serve } from "bun";
import { version } from "./package.json";
import index from "./src/index.html";

const openBrowser = (url: string) => {
  const platform = process.platform;
  let command: string;

  if (platform === "darwin") {
    command = "open";
  } else if (platform === "win32") {
    command = "start";
  } else {
    command = "xdg-open";
  }

  Bun.spawn([command, url]);
};

const server = serve({
  port: 3876,
  routes: {
    "/": index,
  },
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
  },
  websocket: {
    message(ws, message) {
      // When we receive a 'shutdown' message, close the server
      if (message === "shutdown") {
        console.log("Shutdown signal received. Exiting.");
        ws.close();
        server.stop(true);
        process.exit(0);
      }
    },
    close(ws) {
      // If the client disconnects, shut down the server.
      // This handles the case where the tab is closed abruptly.
      console.log("Client disconnected. Exiting.");
      server.stop(true);
      process.exit(0);
    },
  },
});

const url = `http://localhost:${server.port}`;

console.log(
  `Morphaweb v${version} is running at: ${url} (Cmd+click to open). `,
);
console.log(`Attempting to start in your default browser...`);

openBrowser(url);
