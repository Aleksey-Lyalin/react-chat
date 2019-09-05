function button() {
    return 'button';
}

class Slider {
    constructor(width, heght, count) {
        this.width = width;
        this.heght = heght;
        this.count = count;
    }
    nextSlide() {
        console.log('Next slide');
    }

    prevSlide() {
        console.log('Previe slide');
    }

    countSlide() {
        console.log(this.width, this.heght, this.count);
    }

}

class AutoSlider extends Slider {
    constructor(width, heght, count, auto) {
        super(width, heght, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay ${this.auto}`);
    }
    logThis(){
        console.log(this);
    }
}
export {button, AutoSlider};
// const log = new AutoSlider(600, 400, 5, true);
//     // someLog = new Slider(300, 400, 5)
// log.logThis();
