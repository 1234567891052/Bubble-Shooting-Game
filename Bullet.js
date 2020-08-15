function Bullet(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity_dir = createVector((mouseX - this.x), (mouseY - this.y)).normalize();

    this.display = function(){
        fill("orange");
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);
    }

    this.move = function(mag){
        this.x += this.velocity_dir.x * mag;
        this.y += this.velocity_dir.y * mag;
    }


    this.IsTouching = function(object){
        if(this.x - object.x < object.width/2 + this.width/2
        && object.x - this.x < object.width/2 + this.width/2
        && this.y - object.y < object.height/2 + this.height/2
        && object.y - this.y < object.height/2 + this.height/2){
            return true;
        }
        else{
            return false;
        }
    }
}
