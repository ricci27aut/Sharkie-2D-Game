class Coins extends DrawableOBjekt {
width = 70;
    height = 70;

    Images = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ]

     constructor() {
        super().loadImg('img/4. Marcadores/1. Coins/1.png')
        this.loadImges(this.Images)
        this.x = 100;
        this.y = 120
        this.animate()
    }

      animate() {
        setInterval(() => {
            this.playAnimation(this.Images);
        },1000);

    }
}


class PoisenIcon extends DrawableOBjekt {

    width = 70;
    height = 70;

    Images = [
        'img/4. Marcadores/Posión/Dark - Left.png',
        'img/4. Marcadores/Posión/Dark - Right.png'
    ]

    constructor() {
        super().loadImg('img/4. Marcadores/Posión/Dark - Left.png')
        this.loadImges(this.Images)
        this.x = this.getRandamX();
        this.y = 320
        this.animate()
    }

       animate() {
        setInterval(() => {
            this.playAnimation(this.Images);
        },1000);

    }

    getRandamX(){
        this.x = 600 + Math.random() * 200;
        return this.x
    };

}