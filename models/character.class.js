class Character extends MovableObject {
   height = 220;
   width = 220;
   x = 120;
   speed= 5;

   Image_Swimming = [
      `img/1.Sharkie/3.Swim/1.png`,
      `img/1.Sharkie/3.Swim/2.png`,
      `img/1.Sharkie/3.Swim/3.png`,
      `img/1.Sharkie/3.Swim/4.png`,
      `img/1.Sharkie/3.Swim/5.png`,
      `img/1.Sharkie/3.Swim/6.png`,
   ];
   world;



   constructor() {
      super().loadImg('img/1.Sharkie/1.IDLE/1.png')
      this.loadImges(this.Image_Swimming)
       this.animate(); 
   }

   jump() { }

 animate() {

      setInterval(() => {    
  if (this.world.keyBindings.RIGHT && this.x < this.world.level.level_end_x) {
         this.x += this.speed;
         this.otherDirection = false;
      }
       if (this.world.keyBindings.LEFT && this.x > 0) {
         this.x -= this.speed;
         this.otherDirection = true;
      }
     this.world.camera_x = -this.x + 100;
   }, 1000 / 60); 

      setInterval(() => {
         if (this.world.keyBindings.RIGHT || this.world.keyBindings.LEFT) {
            this.playAnimation(this.Image_Swimming)
         }
      }, 50);
      }
   }