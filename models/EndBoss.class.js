class Endboss extends MovableObject {
  height = 380;
  width = 380;
  hasPlayed = false;
  a = 0
  x = 1601;
  lastAttack = 0;


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

  Image_Attack = [
    'img/2.Enemy/3 Final Enemy/Attack/1.png',
    'img/2.Enemy/3 Final Enemy/Attack/2.png',
    'img/2.Enemy/3 Final Enemy/Attack/3.png',
    'img/2.Enemy/3 Final Enemy/Attack/4.png',
    'img/2.Enemy/3 Final Enemy/Attack/5.png',
    'img/2.Enemy/3 Final Enemy/Attack/6.png'
  ];

  world;

  constructor() {
    super();
    this.loadImges(this.Image_Swimming)
    this.loadImges(this.Image_Dead)
    this.loadImges(this.Image_Introduce)
    this.loadImges(this.Image_Attack)
    this.img = this.imageCache[this.Image_Swimming[0]];
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.character.x <= 1240){
        this.y = -600
        return
      }else if(this.isDead()) {
        this.playAnimation(this.Image_Dead);
        this.world.endScreen.showGameOver();
        return
       }else if (this.world.character.x > 1300 && this.hasPlayed === false) {
        disableControls(5000);
        this.world.keyBindings.RIGHT = false
        this.y = 30
        this.playAnimationOnce(this.Image_Introduce);
      } else if (this.world.character.x > this.x - 300 && !this.coolDownBoss()) {
         this.playAnimation(this.Image_Attack)
        this.attackBit()
      } else if (this.x < 1600 && this.coolDownBoss()) {
        this.goBack()
      }else {
        this.playAnimation(this.Image_Swimming);
      }
    }, 1500 / 10); // 10 FPS reicht für Dead-Animation – ggf. 60 FPS für Swimming
  }

  attackBit() {
    this.x = this.x - Math.random() - 10
    this.lastAttack = new Date().getTime();
  }

  goBack() {
    let intervalId = setInterval(() => {
      if (this.x >= 2100) {
        clearInterval(intervalId)
        return
      }
      this.x = this.x + Math.random()
    })


  }

  playAnimationOnce(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;

    if (this.a >= images.length) {
      this.hasPlayed = true;
    }
    this.a++;
  }

  coolDownBoss() {
      let timePassed = new Date().getTime() - this.lastAttack;// difference in ms
      timePassed = timePassed / 1000 // difference in s
      return timePassed < 0.5;
   }
}
