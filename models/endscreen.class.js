class EndScreen extends DrawableOBjekt{

    Images_Game_lose = [
        'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        'img/6.Botones/Tittles/Game Over/Recurso 10.png',
        'img/6.Botones/Tittles/Game Over/Recurso 11.png',
        'img/6.Botones/Tittles/Game Over/Recurso 12.png',
        'img/6.Botones/Tittles/Game Over/Recurso 13.png',
    ]

    world;


    constructor(){
        super();
        this.loadImges(this.Images_Game_lose)
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
        this.playAnimation(this.Images_Game_lose)
    }
}