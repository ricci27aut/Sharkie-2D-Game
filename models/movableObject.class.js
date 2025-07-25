class MovableObject extends DrawableOBjekt {
   speed = 0.5;
   otherDirection = false;
   speedY = 0;
   acceleration = 1;
   energy = 100;
   lastHit = 0;



   moveLeft() {
      this.x -= this.speed;
   }

   moveRight() {
      this.x += this.speed;
   }

   jump() {
      this.speedY = 15
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
      if (this instanceof ThrowableObject) {
         return true;
      } else {
         return this.y < 200;
      }
   }

   isCollidingWithAny(objektArray) {
      return objektArray.some(obj => this.isColliding(obj));
   }


   isColliding(objekt) {
      return this.x < objekt.x + objekt.width &&
         this.x + this.width > objekt.x &&
         this.y < objekt.y + objekt.height &&
         this.y + this.height > objekt.y;
   }

   hit() {
      if (this.coolDown()) return; // Noch in Cooldown → kein neuer Schaden

      this.energy -= 20;

      if (this.energy < 0) {
         this.energy = 0;
      } else {
         this.lastHit = new Date().getTime(); // Cooldown starten
      }
   }

   isDead() {
      return this.energy == 0;
   }

   coolDown() {
      let timePassed = new Date().getTime() - this.lastHit;// difference in ms
      timePassed = timePassed / 1000 // difference in s
      return timePassed < 1;
   }
}
