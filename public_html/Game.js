export {Game};
import {MessageBox} from "./MessageBox.js";

class Game {
    constructor(box, timer, canSoundFile, fallSoundFile) {
        this.cans = [];
        this.timer = timer;
        this.canSoundFile = canSoundFile;
        this.fallSoundFile = fallSoundFile;
        this.messageBox = new MessageBox(box);
        this.messageBox.send("PRESS SPACEBAR TO START");
    }
    
    append(can) {
        can.game = this;
        this.cans.push(can);
    }
    
    start() {
        var n = this.cans.length;
        for (var i = 0; i < n; i++) {
            this.cans[i].start();
        }
        this.timer.start();
    }
    
    stop() {
        var n = this.cans.length;
        for (var i = 0; i < n; i++) {
            this.cans[i].stop();
        }
        this.timer.stop();
    }
    
    superHit(event) {
        var n = this.cans.length;
        for (var i = 0; i < n; i++) {
            this.cans[i].hit(event);
        }
    }
    
    restart() {
        var n = this.cans.length;
        for (var i = 0; i < n; i++) {
            this.cans[i].refresh();
        }
        this.timer.restart();
    }    
}
