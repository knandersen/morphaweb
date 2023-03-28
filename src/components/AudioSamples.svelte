<script lang="ts">
    import { onMount } from "svelte";
    export let fileName: string;
    import Worker from "$lib/worker.js?worker";

    let audioSamples: number[] = [];

    const svgWidth = 1000;
    const svgHeight = 500;
    let viewBox = `0 0 ${svgWidth} ${svgHeight}`;
    let zoomLevel = 1;

    onMount(() => {
        const worker = new Worker();

        worker.postMessage(fileName);
        worker.addEventListener("message", async (e) => {
            const arrayBuffer = e.data;
            const audioContext = new AudioContext();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            audioSamples = Array.from(audioBuffer.getChannelData(0));
        });

        return () => {
            worker.terminate();
        };
    });

    $: audioSamples;
    $: pathData = getPathData(audioSamples);

    function getPathData(samples: number[]): string {
        const xScale = svgWidth / (samples.length - 1);
        const yScale = svgHeight / 2;

        const points = samples
            .map((sample, index) => {
                const x = index * xScale;
                const y = sample * yScale + yScale;
                return `${x},${y}`;
            })
            .join(" ");

        return `M${points}`;
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();

        const zoomFactor = 2;
        const zoomIn = e.deltaY < 0;
        zoomLevel = zoomIn ? zoomLevel + zoomFactor : zoomLevel - zoomFactor;
        zoomLevel = Math.max(1, zoomLevel);

        const newWidth = svgWidth / zoomLevel;
        const newHeight = svgHeight / zoomLevel;

        const offsetX = (svgWidth - newWidth) / 2;
        const offsetY = (svgHeight - newHeight) / 2;

        viewBox = `${offsetX} ${offsetY} ${newWidth} ${newHeight}`;
    }
</script>

<svg {viewBox} xmlns="http://www.w3.org/2000/svg" on:wheel={handleWheel}>
    <path d={pathData} fill="none" stroke="black" stroke-width="0.5" />
</svg>
