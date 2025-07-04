class MovableObject{
   x = 120;
   y = 200;
   height = 100;
   width = 150;
   img;

   loadImg(path){
      this.img = new Image();
      this.img.src = path;
   }

   moveRight() { }

   moveLeft() { }
}



