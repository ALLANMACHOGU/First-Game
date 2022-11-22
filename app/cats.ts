import { canvas, ctx } from "./canvas"
import {character} from "./character"



let imageElement = document.querySelector('#cat');
const width = 40;
const height = 20;
export function drawCat(x, y) {
  ctx.drawImage(imageElement, x, y, width, height);
};

export const catSpecies = {
  fallSpeed: 20,
  cats: [
    { x: 400, y: 350 },
    { x: 150, y: 250 },
    { x: 250, y: 100 },
    { x: 10, y: 500 },
  ],
  add(number) {
    for (let i = 0; i < number; i++) {
      this.cats.push(
        {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        }
      )
    }
  },
  remove(number) {
    for (let i = 0; i < number; i++) {
      this.cats.pop()
    }
  },
  move() {
    this.cats.forEach(
      (cat) => {
        cat.y += this.fallSpeed / 10;
        if (cat.y > canvas.height) {
          cat.y = -10;
        }
        // is the cat greater than the canvas width
        if (cat.x > canvas.width) {
          // then the cat's X starts at 0 (isnt in the code, but in case)
          cat.x = 0;
        }
        if (cat.x < 0) {
          cat.x = canvas.width;
        }
      }
    )
  },


  draw() {
    this.cats.forEach(
      (cat) => {
          drawCat(cat.x, cat.y);
      }
    )
  }
}
