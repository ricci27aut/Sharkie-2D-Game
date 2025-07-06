class Light extends MovableObject{

    x = 620;

    constructor(){
        super().loadImg('img/3. Background/Legacy/Layers/1. Light/1.png')   
        this.y = 0;
        this.animateLight(); 
    }
    animateLight(){
        setInterval(() => { 
            this.x -= 0.15;
        }, 1000/60)

    }
}