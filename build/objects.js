import { Vector2 } from "./math.js";
export class GameObject {
    constructor(position, scale, rotation = 0, color = 'blue') {
        this.x = position.x;
        this.y = position.y;
        this.w = scale.x;
        this.h = scale.y;
        this.rotation = rotation;
        this.velocity = new Vector2(0, 0);
    }
    update(deltaTime) {
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;
    }
}
