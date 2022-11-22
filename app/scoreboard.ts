import {ctx, canvas} from './canvas';
import {character} from './character'
import {catSpecies} from './cats'
import {dogSpecies} from './dogs'

export const scoreboard = {
  score : 0,
  debugMode : true,
  write () {
ctx.font = '14px Futura';  ctx.fillText(`Score: ${this.score}`, 10,50);
    if (this.debugMode) {
      this.writeDebug();
    }
  },
  writeDebug () {
    ctx.font = '16px Courier'
    ctx.fillText(`
    character.x ${character.x.toFixed(1)}
    Dogs: ${JSON.stringify(dogSpecies.dogs)}
    Debug mode: ${this.debugMode}
    `, 10,100)
  }
}

// connect the scoreboard with the true and false code