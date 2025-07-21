class DrawableOBjekt {
    img;
    imageCache = {};
    currentImage = 0;
    x = 720;
    y = 200;
    height = 100;
    width = 150;

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

   draw(ctx) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   };

     drawHitBox(ctx) {

      if (this instanceof Character || this instanceof PufferFisch || this instanceof Endboss) {
         ctx.beginPath();
         ctx.lineWidth = "5";
         ctx.strokeStyle = "blue";
         ctx.rect(this.x, this.y, this.width, this.height);
         ctx.stroke();
      }
   };
}