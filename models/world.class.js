class World {
    character = new Character();
    endboss = new Endboss();

    statusBars = [
        new StatusBars(),
        new PoisonedBar(),
        new coinBar()
    ]

    poisenIcon = [new PoisenIcon(),
        new PoisenIcon()
    ];

    throwabelObject = []
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
        this.run();
    }


    setWorld() {
        this.character.world = this;
    };

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkItem();
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBars[0].setPercentage(this.character.energy);
            }
        });
    }

    checkItem(){
        this.poisenIcon.forEach((item, index)=>{
            if (this.character.isColliding(item)) {
                this.poisenIcon.splice(index,1);
                console.log(this.statusBars[1].percentage)
                this.statusBars[1].percentage += 10;
                this.ThrowableObject.shots += 10
                console.log(this.statusBars[1].percentage)
                this.statusBars[1].setPercentage(this.character.energy);
            }
        })
    }

    checkThrowObjects() {
        if (this.keyBindings.Attack) {
            let bubble = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwabelObject.push(bubble);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusBars)
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwabelObject);
        this.addObjectsToMap(this.poisenIcon)
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