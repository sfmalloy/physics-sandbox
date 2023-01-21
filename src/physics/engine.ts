import { Demo } from './demos';
import { Vector2 } from './math';

export class Engine {
  demo: Demo;
  context: CanvasRenderingContext2D;
  time: number;

  constructor(context: CanvasRenderingContext2D) {
    // this.demo = demo;
    this.context = context;
    this.time = 0;
    this.start();
  }

  setDemo(demo: Demo) {
    this.demo = demo;
  }

  start() {
    this.draw();
    window.requestAnimationFrame(time => {
      this.time = time / 1000;
      this.update(time / 1000);
    });
  }

  update(deltaTime: number) {
    if (this.demo) {
      this.demo.update(deltaTime);
    }
    this.draw();
    window.requestAnimationFrame(time => {
      time /= 1000;
      this.update(time - this.time);
      this.time = time;
    });
  }
  
  draw() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.fillStyle = 'orange';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  
    if (this.demo) {
      this.demo.draw();
    } else {
      this.context.fillStyle = 'black';
      this.context.font = '24px "Fira Sans"';
      this.context.textAlign = 'center';
      this.context.fillText("Press 'R' or the 'Start' button to start", this.context.canvas.width / 2, 50);
    }
  }
}
