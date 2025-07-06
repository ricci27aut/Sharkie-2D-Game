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
  
  

   constructor() {
      super().loadImg(`img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`)
      this.loadImges( this.Image_Swimming)
      this.y = Math.random() * 300;
      this.moveLeft();
      this.animate();
   }
   animate() {
      setInterval(() => {
         let i = this.currentImage % this.Image_Swimming.length;
         let path = this.Image_Swimming[i];
         this.img = this.imageCache[path];
         this.currentImage++;
      }, 10000 / 60);
   };
 
};


