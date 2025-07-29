class Coins extends DrawableOBjekt {
    static lastX = 300;
    width = 50;
    height = 50;

    Images = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ]

    constructor() {
        super().loadImg('img/4. Marcadores/1. Coins/1.png')
        this.loadImges(this.Images)
        this.x = this.getNextXPosition();
        this.y = 100 + Math.random() * 200;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.Images);
        }, 700);

    }

    getNextXPosition() {
        const offset = 200 + Math.random() * 500;  // 200–500 px Abstand
        Coins.lastX += offset;                     // eigene Coin-Positionierung
        return Coins.lastX;
    }
}


class PoisenIcon extends DrawableOBjekt {
    static lastX = 100;
    width = 70;
    height = 70;

    Images = [
        'img/4. Marcadores/Posión/Dark - Left.png',
        'img/4. Marcadores/Posión/Dark - Right.png'
    ]

    constructor() {
        super().loadImg('img/4. Marcadores/Posión/Dark - Left.png')
        this.loadImges(this.Images)
        this.x = this.getNextXPosition();
        this.y = 320
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.Images);
        }, 800);

    }

    getNextXPosition() {
        const offset = 200 + Math.random() * 500; 
        PoisenIcon.lastX += offset;                    
        return PoisenIcon.lastX;
    }
}