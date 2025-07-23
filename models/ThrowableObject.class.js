class ThrowableObject extends MovableObject {
    speedY = 10;
    height = 40;
    width = 40;
    shots = 0;

    constructor(x, y) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.throw()
    }

    throw() {
        if (this.shots > 0) {
            this.applyGravity();
            setInterval(() => {
                this.x += 10
                this.shots -= 10
            }, 25)
        } else {
            return
        }

    }
} 
