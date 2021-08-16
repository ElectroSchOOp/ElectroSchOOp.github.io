export {Can};
import {getBoxInnerPos} from "./fun.js";

class Can {
    constructor(x, y, vx, vy, g, vhit, size, color, box) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.g = g;
        this.size = size;
//        this.color = color;
        this.box = box;
        this.processId = 0;
        this.vhit = vhit;
        this.game = 0;
        this.x0 = x;
        this.y0 = y;
        this.vx0 = vx;
        this.vy0 = vy;
        
        var e = document.createElement("div");
        e.style.width = size + "px";
        e.style.height = size + "px";
        e.style.borderRadius = "50%";
        e.style.position = "absolute";
        e.style.left = x + "px";
        e.style.top = y + "px";
        e.style.backgroundColor = color;
        this.div = e;
        box.appendChild(e);
    }
    
    move() {
        this.vy += this.g;
        this.x += this.vx;
        this.y += this.vy;
        
        var w = this.box.clientWidth;
        var h = this.box.clientHeight;
        
        if (this.x + this.size > w) {
            this.x = w - this.size;
            this.vx = -this.vx;
        }
        
        if (this.y < 0) {
            this.y = 0;
            this.vy = -this.vy;
        }
        
        if (this.x < 0) {
            this.x = 0;
            this.vx = -this.vx;
        }
        
        if (this.y + this.size > h + this.size / 2) {
              this.game.stop();
              var fallSound = new Audio(this.game.fallSoundFile);
              fallSound.play();
              var s = this.game.timer.time.toFixed(1) + " seconds";
              if (this.game.timer.time > this.game.timer.bestTime) {
                  this.game.timer.bestTime = this.game.timer.time;
                  this.game.timer.bestTimeBox.innerHTML = this.game.timer.bestTime.toFixed(1);
                  this.game.messageBox.send("New Best<br>" + s);
              } else {
                  this.game.messageBox.send(s);
              }  
        }
        
        
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
    
    start() {
        var c = this;
        this.processId = window.setInterval(function() {c.move();}, 10);
    }
    
    stop() {
        if (this.processId !== 0) {
            window.clearInterval(this.processId);
            this.processId = 0;
        }
    }
    
    hit(event) {
        var pos = getBoxInnerPos(this.box);
        var mouseX = event.clientX - pos.x;
        var mouseY = event.clientY - pos.y;
        var centerX = this.x + this.size / 2;
        var centerY = this.y + this.size / 2;
        if ((centerX - mouseX) ** 2 + (centerY - mouseY) ** 2 <= (this.size / 2) ** 2) {
            if (this.vy > 0) {
                this.vy = -this.vhit;
            } else {
                this.vy -= this.vhit;
            }
            var canSound = new Audio(this.game.canSoundFile);
            canSound.play();
        }
    }
    
    refresh() {
        this.x = this.x0;
        this.y = this.y0;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.vx = this.vx0;
        this.vy = this.vy0;
        if (this.processId === 0) {
            this.start();
        }
    }
}

