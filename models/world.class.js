class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    light = new Light;
    canvas;
    ctx;
    keyBindings;
    camera_x = 0;

    constructor(canvas, keyBindings) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyBindings = keyBindings;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    setWorld() {
        this.character.world = this;
    };

    checkCollisions(){
        setInterval(()=>{
            this.level.enemies.forEach((enemy)=>{
                if(this.character.isColliding(enemy)){
                    this.character.hit();
                }
            });
        },2000);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character)
        this.addToMap(this.endboss)

        this.ctx.translate(-this.camera_x, 0);

        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        object.draw(this.ctx);
        object.drawHitBox(this.ctx);


        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1); // Flip horizontally
        object.x = object.x * -1
    }

    flipImageBack(object) {
        object.x = object.x * -1
        this.ctx.restore(); // Restore the context to its original state
    }
}