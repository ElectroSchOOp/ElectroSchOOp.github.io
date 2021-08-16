export {MessageBox};

class MessageBox {
    constructor(parent) {
        this.box = document.createElement("div");
        this.box.style.position = "absolute";
        this.box.style.left = "50%";
        this.box.style.top = "50%";
//        this.box.style.backgroundColor = "pink";
        this.box.style.transform = "translate(-50%,-50%)";
        this.box.style.fontSize = "50px";
        this.box.style.textAlign = "center";
        this.box.style.fontFamily = "Monaco";
        this.box.style.zIndex = "1";
        this.box.style.color = "red";
        this.box.style.userSelect="none";
        parent.appendChild(this.box);
        var m = this.box;
        document.addEventListener("keydown", 
            function(event) {
                if (event.keyCode === 32) {
                   m.innerHTML = "";
                }
            }
        );
    }
    
    send(text) {
        this.box.innerHTML = text;
    }
}
