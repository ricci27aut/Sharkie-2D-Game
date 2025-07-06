class MovableObject {
   x = 720;
   y = 200;
   height = 100;
   width = 150;
   img;
   imageCache = {};

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
         this.x -= 0.50;
      }, 1000 / 60);
   }

};


