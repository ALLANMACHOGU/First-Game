import {canvas} from './canvas';
import {character} from './character';
import {scoreboard} from './scoreboard'

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.addEventListener("mousemove", function (ev) {
  character.x = ev.offsetX;
  character.y = ev.offsetY;
});

canvas.addEventListener(
  'dblclick',
  function doubleClick () {
    scoreboard.debugMode = !scoreboard.debugMode;
  }
)

//function doubleClick () {
 // canvas.addEventListener(
  //  'dblclick',
 // )
  // scoreboard.debugMode = //!scoreboard.debugMode;
//}

//doubleClick();