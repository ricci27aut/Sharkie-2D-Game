class Character extends MovableObject {
   height = 220;
   width = 220;
   x = 120;
   speed = 5;

   Image_Swimming = [
      `img/1.Sharkie/3.Swim/2.png`,
      `img/1.Sharkie/3.Swim/3.png`,
      `img/1.Sharkie/3.Swim/5.png`,
      `img/1.Sharkie/3.Swim/6.png`
   ];

   Image_Waiting = [
      'img/1.Sharkie/1.IDLE/1.png',
      'img/1.Sharkie/1.IDLE/2.png',
      'img/1.Sharkie/1.IDLE/3.png',
      'img/1.Sharkie/1.IDLE/4.png',
      'img/1.Sharkie/1.IDLE/5.png',
      'img/1.Sharkie/1.IDLE/6.png',
      'img/1.Sharkie/1.IDLE/7.png',
      'img/1.Sharkie/1.IDLE/8.png',
      'img/1.Sharkie/1.IDLE/9.png',
      'img/1.Sharkie/1.IDLE/10.png',
      'img/1.Sharkie/1.IDLE/11.png',
      'img/1.Sharkie/1.IDLE/12.png',
      'img/1.Sharkie/1.IDLE/13.png',
      'img/1.Sharkie/1.IDLE/14.png',
      'img/1.Sharkie/1.IDLE/15.png',
      'img/1.Sharkie/1.IDLE/16.png',
      'img/1.Sharkie/1.IDLE/17.png',
      'img/1.Sharkie/1.IDLE/18.png'
   ];

   Image_LongWaiting = [
      'img/1.Sharkie/2.Long_IDLE/I2.png',
      'img/1.Sharkie/2.Long_IDLE/I3.png',
      'img/1.Sharkie/2.Long_IDLE/I4.png',
      'img/1.Sharkie/2.Long_IDLE/I5.png',
      'img/1.Sharkie/2.Long_IDLE/I6.png',
      'img/1.Sharkie/2.Long_IDLE/I7.png',
      'img/1.Sharkie/2.Long_IDLE/I8.png',
      'img/1.Sharkie/2.Long_IDLE/I9.png',
      'img/1.Sharkie/2.Long_IDLE/I10.png',
      'img/1.Sharkie/2.Long_IDLE/I11.png',
      'img/1.Sharkie/2.Long_IDLE/I12.png',
      'img/1.Sharkie/2.Long_IDLE/I13.png',
      'img/1.Sharkie/2.Long_IDLE/I14.png'
   ]
   world;



   constructor() {
      super().loadImg('img/1.Sharkie/1.IDLE/1.png')
      this.loadImges(this.Image_Swimming)
      this.loadImges(this.Image_Waiting)
      this.loadImges(this.Image_LongWaiting)
      this.animate();
      this.applyGravity();
   }




   animate() {

      setInterval(() => {
         this.playAnimation(this.Image_Waiting)
      }, 200);

      setInterval(() => {
         if (this.world.keyBindings.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;
         }
         if (this.world.keyBindings.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
         }

       
         if (this.world.keyBindings.UP) {
            this.jump();
         }

         this.world.camera_x = -this.x + 100;
      }, 1000 / 60);

      setInterval(() => {
         if (this.world.keyBindings.RIGHT || this.world.keyBindings.LEFT || this.world.keyBindings.UP) {
            this.playAnimation(this.Image_Swimming)
         }
      }, 100);
   }
}