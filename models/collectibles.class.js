class Coins extends DrawableOBjekt {

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
        this.x = this.x
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