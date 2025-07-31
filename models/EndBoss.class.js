class Endboss extends MovableObject {
  height = 380;
  width = 380;
  hasIntroduced = false;
  attackInterval = null;
  introStarted = false;
  introInterval = null;
  lastAttack = 0;
  a = 0
  x = 3300;
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
    this.img = this.imageCache[this.Image_Introduce[0]];
    this.animate();
    this.checkAbilities()
  }

  checkAbilities() {
    setInterval(() => {
      if (this.coolDown()) {
        this.playAnimation(this.Image_Hurt)
        return
      }if (this.world.character.x - (this.x - this.width) > 30 && this.hasIntroduced && this.coolDownBoss()) {
        this.attackBit()
      }else {
        this.playAnimation(this.Image_Swimming)
      }
    },  500);
  };

  animate() {
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.Image_Dead);
        this.world.endScreen.showGameOver();
        return
      }else if (this.world.character.x > 2950 && !this.introStarted) {
        disableControls(1000);
        this.world.keyBindings.RIGHT = false;
        this.playIntroduceAnimation();
      }
    }, 1000);
  }

  playIntroduceAnimation() {
    if (this.introStarted) return; // Schon aktiv
    this.introStarted = true;
    this.y = 30;

    this.introInterval = setInterval(() => {
      this.playAnimation(this.Image_Introduce);
    }, 1000 / 10);

    // Nach 2 Sekunden wieder stoppen
    setTimeout(() => {
      clearInterval(this.introInterval);
      this.introInterval = null;
      this.playAnimation(this.Image_Swimming); // Rückkehr zur Standard-Animation
      this.hasIntroduced = true;
    }, 700);
  }

  attackBit() {
    if (this.attackInterval) return; // Schon aktiv
    this.firstAttack = true

    this.x = this.x - Math.random() - 60;
    this.lastAttack = new Date().getTime();

    this.attackInterval = setInterval(() => {
      this.playAnimation(this.Image_Attack);
    }, 1200 / 10);

    setTimeout(() => {
      clearInterval(this.attackInterval);
      this.attackInterval = null;
      this.playAnimation(this.Image_Swimming); // Rückkehr zur Standard-Animation
    }, 700);
  }

  coolDownBoss() {
    let timePassed = new Date().getTime() - this.lastAttack;// difference in ms
    timePassed = timePassed / 1000 // difference in s
    return timePassed > 2;
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