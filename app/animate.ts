import { ctx } from './canvas';
import { canvas } from './canvas'
import { character } from './character'
import { catSpecies } from './cats';
import { dogSpecies } from './dogs'
import { scoreboard } from './scoreboard'
import { timer} from './timer'
canvas.addEventListener(
  'mousemove',
  function(ev) {
    // Set the character X to the mouse position
    character.x = ev.offsetX;
    character.y = ev.offsetY;
  }
)

export function animate() {
  //Erase
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Update
  update();
  //Draw
  draw();
  window.requestAnimationFrame(animate);
}

function update() {
  dogSpecies.dogs.forEach((dog) => {

    if (character.check(dog.x + 25, dog.y + 25)) {
      scoreboard.score += 1;
      dog.y = -5
    }
  })

  catSpecies.cats.forEach((cat) => {
    if (character.check(cat.x, cat.y)) { 
      scoreboard.score += 1,
      cat.y = -5  
    }
  })

  catSpecies.move();
  dogSpecies.move();
}

function draw() {
  character.draw();
  catSpecies.draw();
  dogSpecies.draw();
  scoreboard.write();
}

window.requestAnimationFrame(animate);
timer.start()
//timer.reset()