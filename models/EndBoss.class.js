class Endboss extends MovableObject{

  height = 380;
  width = 380;

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

  constructor() {
    super().loadImg('img/2.Enemy/3 Final Enemy/2.floating/1.png')
    this.loadImges(this.Image_Swimming)
    this.x = 2100;
    this.y = 30;
    this.animate();
  }

  animate() {
    setInterval(() => {
  
        this.playAnimation(this.Image_Swimming)

    }, 10000 / 60);
  }
}