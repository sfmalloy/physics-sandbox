<script lang="ts">
  export let name: string;
  export let label: string;
  export let min: number;
  export let max: number;
  export let step: number;
  export let value: number;
</script>

<div>
  <label for={name}>{label}: {value}</label>
  <input type="range" bind:value={value} min={min} max={max} step={step} name={name}>
</div>

<style>
  div {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 50% 50%;
  }
</style>
