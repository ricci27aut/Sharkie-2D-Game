class Endboss extends MovableObject{
  height = 380;
  width = 380;
  hasPlayed = false;
  a = 0
 

  Image_Introduce = [ 
    'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
    'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
  ]

  Image_Swimming = [
    'img/2.Enemy/3 Final Enemy/2.floating/1.png',
    'img/2.Enemy/3 Final Enemy/2.floating/2.png',
    'img/2.Enemy/3 Final Enemy/2.floating/3.png',
    'img/2.Enemy/3 Final Enemy/2.floating/4.png',
    'img/2.Enemy/3 Final Enemy/2.floating/5.png',
    'img/2.Enemy/3 Final Enemy/2.floating/6.png',
    'img/2.Enemy/3 Final Enemy/2.floating/7.png',
    'img/2.Enemy/3 Final Enemy/2.floating/8.png',
    'img/2.Enemy/3 Final Enemy/2.floating/9.png',
    'img/2.Enemy/3 Final Enemy/2.floating/10.png',
    'img/2.Enemy/3 Final Enemy/2.floating/11.png',
    'img/2.Enemy/3 Final Enemy/2.floating/12.png',
    'img/2.Enemy/3 Final Enemy/2.floating/13.png',
  ];

  Image_Dead = [
    'img/2.Enemy/3 Final Enemy/Dead/dead_1.png',
    'img/2.Enemy/3 Final Enemy/Dead/dead_2.png',
    'img/2.Enemy/3 Final Enemy/Dead/dead_3.png',
    'img/2.Enemy/3 Final Enemy/Dead/dead_4.png',
    'img/2.Enemy/3 Final Enemy/Dead/dead_5.png',
  ];

  world;

  constructor() {
    super();
    this.loadImges(this.Image_Swimming)
    this.loadImges(this.Image_Dead)
    this.loadImges(this.Image_Introduce)
    this.x = 2100;
    this.y = 30;
    this.img = this.imageCache[this.Image_Swimming[0]];
    this.animate();
  }

  animate() {
    setInterval(() => {
        if (this.isDead()) {
            this.playAnimation(this.Image_Dead);
        }
        if (this.world.character.x > 1850 && this.hasPlayed === false) {
            this.playAnimationOnce(this.Image_Introduce);
        } else {
            this.playAnimation(this.Image_Swimming);
        }
    }, 1700 / 10); // 10 FPS reicht für Dead-Animation – ggf. 60 FPS für Swimming
}

playAnimationOnce(images) {
    let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
      

        if (this.a >= images.length) {
            this.hasPlayed = true
        }
        this.a++
    }
}


   