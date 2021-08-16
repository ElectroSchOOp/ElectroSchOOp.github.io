import {Can} from "./Can.js";
import {Game} from "./Game.js";
import {Timer} from "./Timer.js";

var t = new Timer(document.getElementById("timer"), document.getElementById("bestTime"));
var b = document.getElementById("box");
var g = new Game(b, t, "can.wav", "fall.wav");
var s = document.getElementById("start");
var c = new Can(162, 0, 0, 0, 0.02, 2, 50, "red", b);
var c2 = new Can(375, 0, 0, 0, 0.02, 2, 50, "blue", b);
var c3 = new Can(587, 0, 0, 0, 0.02, 2, 50, "#33cc33", b);
g.append(c);
g.append(c2);
g.append(c3);
b.addEventListener("mousedown", function(event) {g.superHit(event);});
document.addEventListener("keydown", 
    function(event) {
        if (event.keyCode === 32) {
            g.restart();
        }
    }
);


