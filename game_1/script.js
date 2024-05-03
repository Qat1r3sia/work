var letters = [];
var hit,miss,fallSpeed,speed;
var fallFlow = 70;

function setup() {
  createCanvas(windowWidth,windowHeight-4);
  letters.push(new letter());
  hit = new score;
  miss = new miss;
  speed = new speed;
}

function draw() {
  background(51);
  hit.show();
  miss.show();
  speed.show();

  for (var i = letters.length-1; i >= 0; i--){
    letters[i].show();
    letters[i].fall();

    if(letters[i].offScreen()){
      letters.splice(i,1);
      miss.addOne();
      fallFlow++;
    }

    if(letters[i].chara == key){
      fallFlow--;

      if(fallFlow < 5){
        fallFlow = 70;
        
        if(hit.hit < miss.miss){
          speed.speedControl--;

          if(speed.speedControl > 8 && speed.speedControl < 10){
            speed.y -= 20;
          }

        }else if(speed.speedControl < 14){
          speed.speedControl++;

          if(speed.speedControl > 9 && speed.speedControl < 11){
            speed.y -= 20;
          }

        }
      }

      letters.splice(i,1);
      hit.addOne();
    }

  }
  
  if (frameCount % fallFlow == 0){
    letters.push(new letter());
  }

}

function letter(){

    var radShape = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",",".","/",";","'","[","]"]
    
    //var radShape = ["ص","ض","ث","ق","ف","غ","ع","ه","خ","ح","ج","ش","س","ي","ب","ل","ا","ت","ن","م","ك","ط","ذ","ء","ؤ","ر","ى","ة","و","ز","ظ","د"];
        
    //properties
    this.x = Math.random() * width;
    this.y = 0;
    this.gravity = 0.05; //increase to change speed
    this.velocity = 0;
    this.chara = radShape[Math.floor(Math.random() * 33)];
    
    //methods
    this.show = function(){
        fill(255);
        text(this.chara,this.x,this.y);
        textSize(50);

        if(this.x < 30){
            this.x = 30;
        }else if(this.x > width - 30){
            this.x = width - 30;
        }
    }

    this.fall = function(){
        this.velocity += (speed.speedControl * this.gravity);
        this.velocity *= 0.9;
        this.y += this.velocity;
    }

    this.offScreen = function(){
        if(this.y > height){
            return true;
        }else{
            return false;
        }
    }
}

function score(){

    //properties
    this.x = windowWidth -30;
    this.y = 40;
    this.hit = 0;

    //methods
    this.show = function(){
        text(this.hit,this.x,this.y);
        textSize(40);
    }

    this.addOne = function(){
        this.hit += 1;
        if(this.hit > 9 && this.hit < 11){
            this.x -= 20;
        }
        if(this.hit > 99 && this.hit < 101){
            this.x -= 20;
        }
    }

}

function miss(){
    this.x = windowWidth - 30;
    this.y = 80;
    this.miss = 0;

    this.show = function(){
        text(this.miss,this.x,this.y);
        textSize(40);
    }

    this.addOne = function(){
        this.miss += 1;
        if(this.miss > 9 && this.miss < 11){
            this.x -= 20;
        }
        if(this.miss > 99 && this.miss < 101){
            this.x -= 20;
        }
    }
}

function speed(){

    this.x = windowWidth - 30;
    this.y = windowHeight - 15;
    this.speedControl = 1;

    this.show = function(){
        text(this.speedControl,this.x,this.y);
        
    }

}