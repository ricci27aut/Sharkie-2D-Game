class Character extends MovableObject {
   height = 220;
   width = 220;
   x = 120;
   Image_Swimming = [
      `img/1.Sharkie/3.Swim/1.png`,
      `img/1.Sharkie/3.Swim/2.png`,
      `img/1.Sharkie/3.Swim/3.png`,
      `img/1.Sharkie/3.Swim/4.png`,
      `img/1.Sharkie/3.Swim/5.png`,
      `img/1.Sharkie/3.Swim/6.png`,
   ];


   constructor() {
      super().loadImg('img/1.Sharkie/1.IDLE/1.png')
      this.loadImges( this.Image_Swimming)
      this.animate();
   }

   jump() { }

   animate() {
      setInterval(() => {
         let i = this.currentImage % this.Image_Swimming.length;
         let path = this.Image_Swimming[i];
         this.img = this.imageCache[path];
         this.currentImage++;
      }, 10000 / 60);
   };
}