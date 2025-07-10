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

   moveRight() {
   }

   moveLeft() {
      setInterval(() => {
         this.x -= this.speed;
      }, 1000 / 60);
   }

   playAnimation(images) {
      let i = this.currentImage % this.Image_Swimming.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
   }


};


