class EndScreen extends DrawableOBjekt {
    img;
    imageCache = {};
    currentImage = 0;
    width = 400
    height = 200
    x = 150
    y = 50

    Images_Game_lose = [
        'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        'img/6.Botones/Tittles/Game Over/Recurso 10.png',
        'img/6.Botones/Tittles/Game Over/Recurso 11.png',
        'img/6.Botones/Tittles/Game Over/Recurso 12.png',
        'img/6.Botones/Tittles/Game Over/Recurso 13.png',
    ];

    world;

    constructor() {
        super();
        this.loadImg(this.Images_Game_lose[0]);
        this.preloadImages(this.Images_Game_lose);
    }

    preloadImages(imagePaths) {
        imagePaths.forEach(path => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                this.imageCache[path] = img;
            };
        });
    }

    showGameOver() {
        this.world.isGameRunning = false;

        const img = new Image();
        img.src = 'img/6.Botones/Tittles/You win/Mesa de trabajo 1.png';

        // Wenn das Bild geladen ist, verzögert anzeigen
        img.onload = () => {
            setTimeout(() => {
                 this.world.ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.world.ctx.drawImage(img, 0, 0,this.world.canvas.width,this.world.canvas.height);
            }, 1200); // ⏱️ Verzögerung: 1 Sekunde
        };}

        showGameLose() {
            this.world.isGameRunning = false;

            setTimeout(() => {
                this.animationInterval = setInterval(() => {
                    this.world.ctx.clearRect(0, 0, canvas.width, canvas.height);
                    this.playAnimation(this.Images_Game_lose);
                }, 700);
            }, 3000); // ⏱️ Startet nach 1 Sekunde
        }

        playAnimation(images) {
            let i = this.currentImage % images.length;
            let path = images[i];
            const img = this.imageCache[path];

            this.img = img;
            this.currentImage++;
            this.world.ctx.clearRect(0, 0, this.world.canvas.width, this.world.canvas.height);
            this.world.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }


