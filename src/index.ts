import { SingleBounce } from "./demos.js";
import { Vector2 } from "./math.js";

const canvas: HTMLCanvasElement = document.querySelector('#demo');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const doUpdate = (deltaTime: number) => {
  update(deltaTime);
  draw();
  window.requestAnimationFrame((newTime: number) => {
    newTime /= 1000;
    doUpdate(newTime - time);
    time = newTime;
  });
}

const update = (deltaTime: number) => {
  demo.update(deltaTime);
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
  demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context, parseFloat(bounceSlider.value), parseFloat(initialXVelocity.value) * 250);
}

const bounceSlider: HTMLInputElement = document.querySelector('#damping-range');
const initialXVelocity: HTMLInputElement = document.querySelector('#x-velocity');
bounceSlider.oninput = (event) => {
  const target = event.target as HTMLInputElement;
  document.querySelector('#damping-amount').innerHTML = target.value;
}

initialXVelocity.oninput = (event) => {
  const target = event.target as HTMLInputElement;
  document.querySelector('#velocity-amount').innerHTML = target.value;
}

document.querySelector('#damping-amount').innerHTML = bounceSlider.value;
document.querySelector('#velocity-amount').innerHTML = initialXVelocity.value;

let demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context, parseFloat(bounceSlider.value), parseFloat(initialXVelocity.value) * 250);
let time = 0;

doUpdate(0);
