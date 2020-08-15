var player;
var bullet = [];
var crossharir;
var b1, b2, b3, b4;
var score = 0;
var life = 2;

function setup(){
    createCanvas(600, 600);
    player = new Player(width/2, height/2, 30, 30);

    var x = random(400, 550);
    var xx = random(100, 250);

    b1 = new Bubble(xx, xx, 10, 10);
    b2 = new Bubble(x, xx, 10, 10);
    b3 = new Bubble(xx, x, 10, 10);
    b4 = new Bubble(x, x, 10, 10);
}

function draw(){
    background(0);

    if (life > 1) {
      text(score, 550, 10);

      for(var i = 0; i < bullet.length; i++){
          bullet[i].display();
          bullet[i].move(15);
      }

      push();
          fill(255);
          noStroke();
          ellipseMode(RADIUS);
          ellipse(mouseX, mouseY, 5, 5);

          stroke(255);
          strokeWeight(2);
          line(mouseX, mouseY, player.x, player.y);
      pop();

      player.display();

      if (player.x < 0) {
          player.x = 0;
      }

      if (player.x > width) {
          player.x = width;
      }

      if (player.y <= 0) {
        player.y = 0;
      }

      if (player.y >= height) {
        player.y = height;
      }

      if(keyIsDown(68)){
          player.move(-5, 0);
      }

      if(keyIsDown(70)){
          player.move(5, 0);
      }

      if (keyIsDown(69)) {
        player.move(0, -5);
      }

      if (keyIsDown(86)) {
        player.move(0, 5);
      }

      var x = random(1, 2);
      var xx = random(-1, -2);
      var y = random(1, 2);
      var yy = random(-1, -2);

      b1.display();
      b1.move(x, y);

      b2.display();
      b2.move(xx, y);

      b3.display();
      b3.move(x, yy);

      b4.display();
      b4.move(xx, yy);


      var j = random(10, height - 10);
      var jj = random(10, height - 10);

      if (b1.x >= width || b1.y >= height) {
        b1.x = j;
        b1.y = jj;
      }

      if (b2.x <= 0 || b2.y >= height) {
        b2.x = j;
        b2.y = jj;
      }

      if (b3.x >= width || b3.y <= 0) {
        b3.x = j;
        b3.y = jj;
      }

      if (b4.x <= 0 || b4.y <= 0) {
        b4.x = j;
        b4.y = jj;
      }

      for(var i = 0; i < bullet.length; i++){
        var j = random(10, height - 10);
        var jj = random(10, height - 10);

        if (bullet[i].IsTouching(b1) === true) {
          score++;
          b1.x = j;
          b1.y = jj;
        }

        if (bullet[i].IsTouching(b2) === true) {
          score++;
          b2.x = j;
          b2.y = jj;
        }

        if (bullet[i].IsTouching(b3) === true) {
          score++;
          b3.x = j;
          b3.y = jj;
        }

        if (bullet[i].IsTouching(b4) === true) {
          score++;
          b4.x = j;
          b4.y = jj;
        }
      }

      if (b1.IsTouching(player) === true || b2.IsTouching(player) === true || b3.IsTouching(player) === true || b4.IsTouching(player) === true) {
        life -= 1;
      }
    }

    if (life <= 1) {
      textSize(20);
      text("YOU LOSE!", width/2 - 50, height/2);
    }
}

function mousePressed(){
    bullet.push(new Bullet(player.x, player.y, 5, 5));
}