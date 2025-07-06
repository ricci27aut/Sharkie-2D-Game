class World {
    ctx;
    canvas;

    character = new Character();
    light = new Light();


    enemies = [
        new PufferFisch(),
        new PufferFisch(),
        new PufferFisch()
    ];

    backgroundObjects = [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 0),
    ];

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.draw()
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.light);
        this.addToMap(this.character)
        this.addObjectsToMap(this.enemies);


        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.ctx.drawImage(o.img, o.x, o.y, o.width, o.height)
        })
    };

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
    }
}