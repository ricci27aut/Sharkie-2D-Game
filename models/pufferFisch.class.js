class PufferFisch extends MovableObject {
   height = 80;
   width = 80;
   Image_Swimming = [
      `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`,
      `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png`,
      `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png`,
      `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png`,
      `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png`,
   ];

   energy = 20;



   constructor() {
      super();
      this.loadImges(this.Image_Swimming)
      this.y = Math.random() * 300;
      this.speed = 0.5 + Math.random() * 0.5;
      this.animate();
   }
   animate() {
      setInterval(() => {
         let i = this.currentImage % this.Image_Swimming.length;
         let path = this.Image_Swimming[i];
         this.img = this.imageCache[path];
         this.currentImage++;
      }, 10000 / 60);

      setInterval(() => {
         if (this.energy <= 0) {
            this.loadImg('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png');
            this.y = this.y - 5 
         }else{
            this.moveLeft();
         }
      }, 1000 / 60);

       
   };
};


