import { Vector2 } from './math.js';
import { GameObject } from './objects.js';

export interface Demo {
  update(deltaTime: number): void;
  draw(): void;
}

const g = 2640;
const EPISILON = 1e-45;

export class BallDemo implements Demo {
  ball: GameObject;
  maxVelocity: number;
  radius: number;
  context: CanvasRenderingContext2D;
  damping: number;

  constructor(initalPosition: Vector2, context: CanvasRenderingContext2D, damping: number, initialXVelocity: number) {
    this.ball = new GameObject(initalPosition, new Vector2(50, 50));
    this.ball.color = 'blue';
    this.radius = this.ball.h / 2;
    this.maxVelocity = -g * Math.sqrt(2 * this.ball.y / g);
    this.context = context;
    this.ball.velocity.x = initialXVelocity * 250;
    this.damping = damping;
  }

  update(deltaTime: number): void {
    this.ball.velocity.y += g * deltaTime;
    if ((this.context.canvas.height - this.radius) - this.ball.y <= EPISILON) {
      this.maxVelocity *= this.damping;
      this.ball.velocity.y = this.maxVelocity;
      this.ball.velocity.x *= this.damping;
    }

    if (this.context.canvas.width - this.radius - this.ball.x <= EPISILON) { 
      this.ball.velocity.x *= -1;
      this.ball.velocity.x *= this.damping;
    }

    if (this.ball.x - this.radius <= EPISILON) {
      this.ball.velocity.x *= -1;
      this.ball.velocity.x *= this.damping;
    }

    this.ball.update(deltaTime);
    this.ball.y = Math.min(this.ball.y, this.context.canvas.height - this.radius);
    this.ball.x = Math.min(this.context.canvas.width - this.radius, Math.max(this.radius, this.ball.x));
  }

  draw(): void {
    this.context.fillStyle = this.ball.color;
    this.context.beginPath();
    this.context.arc(this.ball.x, this.ball.y, this.radius, 0, 2 * Math.PI);
    this.context.fill();
  }
}

export class PendulumDemo implements Demo {
  weight: GameObject;
  radius: number;
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  update(deltaTime: number): void {
    
  }

  draw(): void {
    this.context.fillStyle = 'black';
    this.context.font = '24px "Fira Sans"';
    this.context.textAlign = 'center';
    this.context.fillText("Not Implemented Yet", this.context.canvas.width / 2, 50);
  }
}
