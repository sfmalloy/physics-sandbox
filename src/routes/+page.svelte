<script lang="ts">
  import { onMount } from "svelte";
  import { Ball } from "../physics/demos";
  import { Engine } from "../physics/engine";
  import { Vector2 } from "../physics/math";
  import Slider from "../slider.svelte";

  let xSpeed: number = 4;
  let bounce: number = 0.5;
  let sign = 1;

  let canvas: HTMLCanvasElement;
  let engine: Engine;
  let center: Vector2;
  let context: CanvasRenderingContext2D;

  onMount(() => {
    center = new Vector2(canvas.width / 2, canvas.height / 2);
    context = canvas.getContext('2d');
    engine = new Engine(context);

    window.onkeydown = (event) => {
      if (event.key.toLowerCase() === "r") {
        engine.setDemo(new Ball(center, context, bounce, sign * xSpeed * 250));
        sign *= -1;
      }
    }

  });

  const handleForm = () => {
    engine.setDemo(new Ball(center, context, bounce, sign * xSpeed * 250));
    sign *= -1;
  };
</script>

<div id="content">
  <h1>Physics Sandbox</h1>
  <div id="game">
    <canvas bind:this={canvas} width={500} height={500} />
    <form on:submit|preventDefault={handleForm}>
      <Slider bind:value={bounce} name="bounce" label="Bounce" min={0} max={1} step={0.01} />
      <Slider bind:value={xSpeed} name="x-speed" label="X Speed" min={0} max={20} step={0.1} />
      <button type="submit">Start</button>
    </form>
  </div>
</div>

<style>
  #content {
    text-align: center;
  }

  h1 {
    font-size: 48px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }

  button {
    font-family: inherit;
  }
</style>
