import { Vector2 } from "./math.js";

export class GameObject {
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
  color: string;
  velocity: Vector2;

  constructor(position: Vector2, scale: Vector2, rotation: number = 0, color: string = 'blue') {
    this.x = position.x;
    this.y = position.y;
    this.w = scale.x;
    this.h = scale.y;
    this.rotation = rotation;
    this.velocity = new Vector2(0, 0);
  }

  update(deltaTime: number) {
    this.x += this.velocity.x * deltaTime;
    this.y += this.velocity.y * deltaTime;
  }
}
