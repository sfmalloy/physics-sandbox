import { SingleBounce } from "./demos.js";
import { Vector2 } from "./math.js";
const canvas = document.querySelector('#demo');
const context = canvas.getContext('2d');
const doUpdate = (deltaTime) => {
    update(deltaTime);
    draw();
    window.requestAnimationFrame((newTime) => {
        newTime /= 1000;
        doUpdate(newTime - time);
        time = newTime;
    });
};
const update = (deltaTime) => {
    demo.update(deltaTime);
};
const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'orange';
    context.fillRect(0, 0, canvas.width, canvas.height);
    demo.draw();
};
const form = document.querySelector('#update-physics');
form.onsubmit = (event) => {
    event.preventDefault();
    sign *= -1;
    demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context, parseFloat(bounceSlider.value), sign * parseFloat(initialXVelocity.value) * 250);
};
const bounceSlider = document.querySelector('#damping-range');
const initialXVelocity = document.querySelector('#x-velocity');
bounceSlider.oninput = (event) => {
    const target = event.target;
    document.querySelector('#damping-amount').innerHTML = target.value;
};
initialXVelocity.oninput = (event) => {
    const target = event.target;
    document.querySelector('#velocity-amount').innerHTML = target.value;
};
document.querySelector('#damping-amount').innerHTML = bounceSlider.value;
document.querySelector('#velocity-amount').innerHTML = initialXVelocity.value;
let demo = new SingleBounce(new Vector2(canvas.width / 2, canvas.height / 2), context, parseFloat(bounceSlider.value), parseFloat(initialXVelocity.value) * 250);
let time = 0;
let sign = 1;
doUpdate(0);
