class World {
    character = new Character();
    endboss = new Endboss();
    endScreen = new EndScreen()

    statusBars = [
        new StatusBars(),
        new PoisonedBar(),
        new coinBar()
    ]

    poisenIcon = [new PoisenIcon(),
    new PoisenIcon(),
    new PoisenIcon(),
    new PoisenIcon(),
    new PoisenIcon(),
    new Coins(),
    ];

    throwabelObject = []
    level = level1;
    light = new Light;
    canvas;
    ctx;
    keyBindings;
    camera_x = 0;
    shots = 0;
    canThrow = true;
    isGameRunning = true;


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
        this.endboss.world = this
        this.endScreen.world = this
    };

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkPoisenItem();
            this.checkCoinItem();
        }, 10);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) || this.character.isColliding(this.endboss)) {
                this.character.hit();
                this.statusBars[0].setPercentage(this.character.energy);
            } else if (this.endboss.isCollidingWithAny(this.throwabelObject)) {
                this.endboss.hit();
            } else if (enemy.isCollidingWithAny(this.throwabelObject)) {
                enemy.hit();
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 1000);
            }
        });
    }

    checkPoisenItem() {
        this.poisenIcon.forEach((item, index) => {
            if (this.character.isColliding(item) && item instanceof PoisenIcon) {
                this.poisenIcon.splice(index, 1);
                this.shots += 20;
                this.statusBars[1].setPercentage(this.shots);
            }
        })
    }

    checkThrowObjects() {
        if (this.keyBindings.Attack && this.shots > 0 && this.canThrow) {
            let bubble = new ThrowableObject(this.character.x + 100, this.character.y + 100, this);
            this.throwabelObject.push(bubble);
            bubble.throw(this.shots);

            this.canThrow = false;  // Cooldown starten
            setTimeout(() => {
                this.canThrow = true;  // Nach 1 Sekunde wieder erlauben
            }, 1000);
        }
    }

    checkCoinItem() {
        this.poisenIcon.forEach((item, index) => {
            if (this.character.isColliding(item) && item instanceof Coins) {
                this.poisenIcon.splice(index, 1);
                this.statusBars[2].percentage += 20;
                this.statusBars[2].setPercentage(this.statusBars[2].percentage);
            }
        })
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
        if (self.isGameRunning) {
            requestAnimationFrame(() => self.draw());
        }
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