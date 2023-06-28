<script lang="ts">
  import { onMount } from "svelte";
  import { Engine } from "$physics/engine";
  import Ball from '$demos/ball.svelte';
  import Pendulum from "$demos/pendulum.svelte";

  let demoType = "ball";

  let canvas: HTMLCanvasElement;
  let engine: Engine;
  let context: CanvasRenderingContext2D;

  onMount(() => {
    context = canvas.getContext('2d');
    engine = new Engine(context);
  });
</script>

<div id="content">
  <h1>Physics Sandbox</h1>
  <select name="demo-type" id="demo-type" bind:value={demoType}>
    <option value="ball">Ball</option>
    <option value="pendulum">Pendulum</option>
  </select>
  <div id="game">
    <canvas bind:this={canvas} width={500} height={500} />
  
    {#if engine}
      {#if demoType === "ball"}
        <Ball engine={engine} />
      {:else}
        <Pendulum engine={engine} />
      {/if}
    {/if}
  </div>
</div>

<style>
  #content {
    text-align: center;
  }

  h1 {
    font-size: 48px;
    margin: 16px 0 16px 0;
  }

  select {
    margin-bottom: 20px;
  }
</style>
