function Player(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.display = function(){
        fill("blue");
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    this.move = function(xvel, yvel){
        this.x += xvel;
        this.y += yvel;
    }
}
