function sound(src) {

    this.sound = document.createElement("audio");
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.src = src;

    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
        document.body.removeChild(this.sound);
    }

}

var mySound;

function startSound() {
    mySound = new sound("../sounds/analog-watch-alarm_daniel-simion.mp3");
    mySound.play();
}

function endSound() {
    mySound.stop();
}