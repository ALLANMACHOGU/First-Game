import {ctx, canvas} from './canvas';
import {scoreboard} from './scoreboard'
import {dogSpecies} from './dogs'
/* 
* A person (Bruce) that can move back and forth.
* He only has an X position since he can
* only move in one direction.
*
* the man can dodge the falling dogs and cats, so it also
* has a property for how long he
* survives.
*/

export const character = {
  x : 200,
  y : 500,
  width : canvas.height/10,
  height : canvas.height / 14,
  check(x,y) {
      if (
      // is it to the right of the object
      x >= this.x
      &&
        // is it to the left of the object 
      x <= this.x + this.width
      &&
        // is it above the object
      y >= this.y
      &&
        // is it below the object
      y <= this.y + this.height
    ) {
      return true
    } else {
      return false
    }
  },
  draw () {
    // Draw character
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.x,// - this.width/2,
      this.y,
      //canvas.height - this.height,
      this.width,
      this.height
    )
  }
}


