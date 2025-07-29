class Endboss extends MovableObject {
  height = 380;
  width = 380;
  hasPlayed = false;
  a = 0
  x = 3300;
  lastAttack = 0;
  y = -1200;


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

  Image_Hurt = [
    'img/2.Enemy/3 Final Enemy/Hurt/1.png',
    'img/2.Enemy/3 Final Enemy/Hurt/2.png',
    'img/2.Enemy/3 Final Enemy/Hurt/3.png',
    'img/2.Enemy/3 Final Enemy/Hurt/4.png',
  ]

  world;

  constructor() {
    super();
    this.loadImges(this.Image_Swimming)
    this.loadImges(this.Image_Dead)
    this.loadImges(this.Image_Introduce)
    this.loadImges(this.Image_Attack)
    this.loadImges(this.Image_Hurt)
    this.img = this.imageCache[this.Image_Swimming[0]];
    this.animate();
  }

 animate() {
  setInterval(() => {
    if (this.isDead()) {
      this.playAnimation(this.Image_Dead);
      this.world.endScreen.showGameOver();
    } else if (this.world.character.x > 3000 && !this.hasIntroduced &&!this.introStarted) {
      this.y = 30;
      disableControls(2000);
      this.world.keyBindings.RIGHT = false;
      this.playIntroduceAnimation();
    }
  }, 1000);
}

playIntroduceAnimation() {
  this.introStarted = true;
  let frame = 0;
  const totalFrames = this.Image_Introduce.length;
  const interval = setInterval(() => {
    if (frame < totalFrames) {
      this.img = this.imageCache[this.Image_Introduce[frame]];
      frame++;
    } else {
      clearInterval(interval);
      this.hasIntroduced = true;
      setTimeout(() => {
        this.startSwimming();
      }, 300);}}, 100);
}

  attackBit() {
    this.x = this.x - Math.random() - 50;
    this.lastAttack = new Date().getTime();
  }

  coolDownBoss() {
    let timePassed = new Date().getTime() - this.lastAttack;
    return (timePassed / 1000) < 2;
  }

  isColliding(objekt) {
    const offsetX = 10;
    const offsetY = 100;
    const hitboxWidth = this.width - 50;
    const hitboxHeight = this.height - 130;

    return this.x + offsetX < objekt.x + objekt.width &&
      this.x + offsetX + hitboxWidth > objekt.x &&
      this.y + offsetY < objekt.y + objekt.height &&
      this.y + offsetY + hitboxHeight > objekt.y;
  }
}