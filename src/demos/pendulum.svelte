<script lang="ts">
  import type { Engine } from "$physics/engine";
  import { onMount } from "svelte";
  import { PendulumDemo } from "$physics/demos";
  import Slider from "$components/slider.svelte";

  export let engine: Engine;

  // Canvas stuff
  let context: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;

  // Initial conditions
  let startHeight = 1;

  onMount(() => {
    context = engine.context;
    canvas = context.canvas;

    window.onkeydown = (event) => {
      if (event.key.toLowerCase() === "r") {
        generateDemo();
      }
    }
  });

  const generateDemo = () => {
    engine.setDemo(new PendulumDemo(context));
  }
</script>

<form on:submit|preventDefault={generateDemo}>
  <Slider bind:value={startHeight} name="start-height" label="Start Height" min={0} max={20} step={0.1} />
  <button type="submit">Start</button>
</form>

<style>
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
</style>

