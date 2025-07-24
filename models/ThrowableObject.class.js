class ThrowableObject extends MovableObject {
    speedY = 10;
    height = 40;
    width = 40;
    speed = 10

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.world = world;
        this.checkloadImg()
    }

    checkloadImg() {
        if (this.world.shots > 0) {
           this.loadImg('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'); 
        } else {
            return;
        }
    }

    throw() {
        if (this.world.shots <= 0) {
            this.world.shots = 0;
            return;
        } 
        if (this.world.keyBindings.RIGHT) {
            this.speed = 30;
        }
            this.world.shots -= 20;
            this.world.statusBars[1].setPercentage(this.world.shots);
            this.applyGravity();

            setInterval(() => {
                this.x +=  this.speed;
            }, 25);

        
    }
}
