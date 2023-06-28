<script lang="ts">
  import type { Engine } from "$physics/engine";
  import { Vector2 } from "$physics/math";
  import { onMount } from "svelte";
  import { BallDemo } from "$physics/demos";
  import Slider from "$components/slider.svelte";

  export let engine: Engine;

  // Canvas stuff
  let context: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;
  let center: Vector2;

  // Initial conditions
  let xSpeed = 4;
  let bounce = 0.5;
  let sign = 1;

  onMount(() => {
    context = engine.context;
    canvas = context.canvas;
    center = new Vector2(canvas.width / 2, canvas.height / 2);

    window.onkeydown = (event) => {
      if (event.key.toLowerCase() === "r") {
        generateDemo();
      }
    }
  });

  const generateDemo = () => {
    engine.setDemo(new BallDemo(center, context, bounce, sign * xSpeed));
    sign *= -1;
  }
</script>

<form on:submit|preventDefault={generateDemo}>
  <Slider bind:value={bounce} name="bounce" label="Bounce" min={0} max={1} step={0.01} />
  <Slider bind:value={xSpeed} name="x-speed" label="X Speed" min={0} max={20} step={0.1} />
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
