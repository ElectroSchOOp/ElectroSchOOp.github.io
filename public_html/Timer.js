export {Timer};

class Timer {
    constructor(box, bestTimeBox) {
        this.box = box;
        this.time = -0.1;
        this.processId = 0;
        this.bestTime = 0;
        this.bestTimeBox = bestTimeBox;
//        this.bestTimeBox.innerHTML = this.bestTime;
    }
    
    step() {
        this.time += 0.1;
        this.box.innerHTML = this.time.toFixed(1);
    }
    
    start() {
        var t = this;
        this.processId = window.setInterval(function() {t.step();}, 100);
    }
    
    stop() {
        if (this.processId !== 0) {
            window.clearInterval(this.processId);
            this.processId = 0;
        }
    }
    
    restart() {
        this.stop();
        this.time = -0.1;
        this.start();
    }
}

