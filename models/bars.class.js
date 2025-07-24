class StatusBars extends DrawableOBjekt {

    Images = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png',
    ];
    percentage = 100;

    constructor() {
        super();
        this.loadImges(this.Images);
        this.x = 50;
        this.y = 0;
        this.width = 200
        this.height = 60
        this.setPercentage(this.percentage)
    }

}

class PoisonedBar extends DrawableOBjekt {

    Images = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    

    constructor() {
        super();
        this.loadImges(this.Images);
        this.x = 50;
        this.y = 45;
        this.width = 200
        this.height = 60
        this.setPercentage(this.percentage)
    }
}

class coinBar extends DrawableOBjekt {

    Images = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImges(this.Images);
        this.x = 50;
        this.y = 90;
        this.width = 200
        this.height = 60
        this.setPercentage(this.percentage)
    }
}