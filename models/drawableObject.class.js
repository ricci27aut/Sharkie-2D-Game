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

      if (this instanceof Character || this instanceof PufferFisch || this instanceof Endboss || this instanceof PoisenIcon) {
         ctx.beginPath();
         ctx.lineWidth = "5";
         ctx.strokeStyle = "blue";
         ctx.rect(this.x, this.y, this.width, this.height);
         ctx.stroke();
      }
   };

   resolveImageIndex(percentage) {
        if (percentage === 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

     setPercentage(percentage) {
        this.percentage = percentage
        let path = this.Images[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    playAnimation(images) {
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
   }

}