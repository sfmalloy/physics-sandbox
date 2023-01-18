import { Vector2 } from './math.js';
import { GameObject } from './objects.js';
const g = 0.264;
export class SingleBounce {
    constructor(initalPosition, context, damping = 1) {
        this.ball = new GameObject(initalPosition, new Vector2(50, 50));
        this.ball.color = 'blue';
        this.radius = this.ball.h / 2;
        this.maxVelocity = -g * Math.sqrt(2 * this.ball.y / g);
        console.log(`max velocity = ${this.maxVelocity}`);
        this.context = context;
        this.ball.velocity.x = 5;
        this.damping = damping;
    }
    update() {
        this.ball.velocity.y += g;
        if ((this.context.canvas.height - this.radius) - this.ball.y <= 1e-6) {
            this.maxVelocity *= this.damping;
            this.ball.velocity.y = this.maxVelocity;
            this.ball.velocity.x *= this.damping;
        }
        if (this.ball.x - this.radius <= 1e-6
            || this.context.canvas.width - this.radius - this.ball.x <= 1e-6) {
            this.ball.velocity.x *= -1;
            this.ball.velocity.x *= this.damping;
        }
        this.ball.update();
    }
    draw() {
        this.context.fillStyle = this.ball.color;
        this.context.beginPath();
        this.context.arc(this.ball.x, this.ball.y, this.radius, 0, 2 * Math.PI);
        this.context.fill();
    }
}
