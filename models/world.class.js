class World {
    character = new Character();
    enemies = [
        new PufferFisch(),
        new PufferFisch(),
        new PufferFisch()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.draw()
    }


    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width)
        this.enemies.forEach(enemies => {
             this.ctx.drawImage(enemies.img, enemies.x, enemies.y, enemies.height, enemies.width)  
        })

        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}