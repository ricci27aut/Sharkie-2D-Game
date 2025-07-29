class EndScreen extends DrawableOBjekt {
     img;
    imageCache = {};
    currentImage = 0;
    
    Images_Game_lose = [
        'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        'img/6.Botones/Tittles/Game Over/Recurso 10.png',
        'img/6.Botones/Tittles/Game Over/Recurso 11.png',
        'img/6.Botones/Tittles/Game Over/Recurso 12.png',
        'img/6.Botones/Tittles/Game Over/Recurso 13.png',
    ]

    world;


    constructor() {
        super();
        this.loadImg('img/6.Botones/Tittles/Game Over/Recurso 9.png')

    }



    showGameOver() {
        this.world.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.world.isGameRunning = false
        const img = new Image(); // Bildobjekt erzeugen
        img.src = 'img/6.Botones/Tittles/You win/Mesa de trabajo 1.png';
        this.world.ctx.drawImage(img, 0, 0, this.world.canvas.width, this.world.canvas.height);
    }


    showGameLose() {
        this.world.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.world.isGameRunning = false
        setInterval(() => {
        this.playAnimation(this.Images_Game_lose) }, 100);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.world.DrawableOBjekt.img = this.world.DrawableOBjekt.imageCache[path];
        this.currentImage++;
        this.world.ctx.drawImage(this.world.DrawableOBjekt.img, this.x, this.y, this.width, this.height)
    }
}