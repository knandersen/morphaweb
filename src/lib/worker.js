self.addEventListener('message', async (e) => {
    const fileName = e.data;
    const response = await fetch(fileName);
    const arrayBuffer = await response.arrayBuffer();
    self.postMessage(arrayBuffer);
});