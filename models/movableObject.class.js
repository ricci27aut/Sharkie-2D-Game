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
   energy = 100;
   lastHit = 0;

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
      this.x -= this.speed;
   }

   moveRight() {
      this.x += this.speed;
   }

   jump() {
      this.speedY = 15
   }

   playAnimation(images) {
      let i = this.currentImage % images.length;
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

   isColliding(objekt) {
      return this.x + this.width > objekt.x &&
         this.y + this.height > objekt.y &&
         this.x < objekt.x &&
         this.y < objekt.y + objekt.height
   }

   hit(){
         this.energy -= 5
       if (this.energy < 0) {
        this.energy = 0
      }else{
         this.lastHit = new Date().getTime();
      }   
   }

   isDead(){
      return this.energy == 0;
   }

   isHurt() {
      let timePassed = new Date().getTime() - this.lastHit;// difference in ms
      timePassed = timePassed / 1000 // difference in s
      return timePassed < 1;
   }
}
