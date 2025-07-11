class MovableObject {
   x = 720;
   y = 200;
   speed = 0.5;
   height = 100;
   width = 150;
   img;
   imageCache = {};
   currentImage = 0;
   otherDirection = false;
   speedY = 0;
   acceleration = 1;

   loadImg(path) {
      this.img = new Image();
      this.img.src = path;
   }

   loadImges(arr) {
      arr.forEach((path) => {
         let img = new Image();
         img.src = path;
         this.imageCache[path] = img;
      })
   }

   moveLeft() {
      setInterval(() => {
         this.x -= this.speed;
      }, 1000 / 60);
   }

   jump(){
      this.speedY += 20
   }

   playAnimation(images) {
      let i = this.currentImage % this.Image_Swimming.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
   }

   applyGravity() {
     setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
           this.y -= this.speedY;
         this.speedY -= this.acceleration;
         }
      }, 1000 / 25) 
   }

   isAboveGround() {
      return this.y < 200;
   }
}



