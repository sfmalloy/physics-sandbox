import { SingleBounce } from "./demos.js";
import { Vector2 } from "./math.js";

const canvas: HTMLCanvasElement = document.querySelector('#demo');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

let demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context);

const doUpdate = () => {
  update();
  draw();
  window.requestAnimationFrame(doUpdate);
}

const update = () => {
  demo.update();
}

const draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'orange';
  context.fillRect(0, 0, canvas.width, canvas.height);

  demo.draw();
}

const form: HTMLFormElement = document.querySelector('#update-physics');
form.onsubmit = (event) => {
  event.preventDefault();
  demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context, parseFloat(slider.value));
}

const slider: HTMLInputElement = document.querySelector('#damping-range');
slider.oninput = (event) => {
  const target = event.target as HTMLInputElement;
  document.querySelector('#damping-label').innerHTML = target.value;
}

document.querySelector('#damping-label').innerHTML = slider.value;

doUpdate();
