

var canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;
export var timer = {
  sec : 0,
  reset () {
    this.sec = 0;
  },
  start () {
    //this.ele = document.getElementById('timer');
    this.timer = setInterval(()=>{
      //this.ele.innerHTML = '00:'+this.sec;
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,500,500);
      ctx.fillText(
        this.sec.toFixed(2),325,100
      );
      ctx.stroke();
      ctx.fill();
     // ctx.strokeRect(20,20,100,100);
      this.sec += 0.1;
    }, 100) // for each 1/10th of a second
  },
  pause(){
    clearInterval(this.timer);
  }
}


//how to unpause