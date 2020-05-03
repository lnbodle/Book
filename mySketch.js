let bugs = []; // array of Jitter objects

//Return the distance beetween two point
function distance(x1,y1,x2,y2) {
  return sqrt(pow(x2-x1,2)+pow(y2-y1,2)) 
}

function direction(x1,y1,x2,y2) {
  return atan2(y2-y1,x2-x1)+PI/2; 
}

//Return the nearest object (x,y,object_list,n)
function nearest(x,y,obj,n) {
  let all_distance = []       
  if (obj.length > 1 && n<=obj.length) {
      for (let i = 0; i < obj.length; i++) {
           all_distance[i] = distance(x,y,obj[i].x,obj[i].y)    
      }
      all_distance = sort(all_distance);
      for (let i = 0; i < obj.length; i++) {
           if (distance(x,y,obj[i].x,obj[i].y)==all_distance[n]) return obj[i]    
      }
  }
}

let t;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight); 
	canvas.position(0,0);
	canvas.style("z-index","-1");
  // Create objects
  for (let i = 0; i < 100; i++) {
    bugs.push(new Jitter());
  }
	t = 0;
}



function draw() {
  background(255);
  //Draw objects 
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    if (i!=bugs.length-1) bugs[i].display();
    
    if (i<bugs.length-1) {

    let d = direction(bugs[i].x,bugs[i].y,bugs[i+1].x,bugs[i+1].y)
    
    //let n = random(-3,3)
    if (distance(bugs[i].x,bugs[i].y,mouseX,mouseY)>15) {
    //bugs[i].x += sin(d+bugs[i].n)*2//this.newx  //lerp(this.x,this.newx,0.005)
    //bugs[i].y -= cos(d+bugs[i].n)*2 //this.newy //lerp(this.y,this.newy,0.005)
			//bugs[i].x += sin(t/10);
			//bugs[i].y -= cos(t/10);
    }
    }
    
    let d = direction(bugs[bugs.length-1].x,bugs[bugs.length-1].y,mouseX,mouseY)
    //bugs[bugs.length-1].x += sin(d)*2
    //bugs[bugs.length-1].y -= cos(d)*2
  }
  

  
  if (mouseIsPressed) {
   // let n = new Jitter();
   // n.x = mouseX;
   // n.y = mouseY;
   // bugs.push(n);
  }

stroke(0)
         //let near = nearest(mouseX,mouseY,bugs,1)
         //line(mouseX,mouseY,near.x,near.y)

  }


class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.newx = this.x+random(-5,5)
    this.newy = this.y+random(-5,5)
    this.t = 0
    this.n = random(-1,1)
    this.diameter = 3;
    this.speed = random(1,3);
  }

  move() {
    this.t += 1
    if (this.t>100) {
      this.n = random(-0.5,0.5)
      this.speed = random(1,10);
      this.t = 0; 
    }
  


  }

  display() {
   //ellipse(this.x, this.y, this.diameter, this.diameter);
    beginShape();
    //noStroke();
    
    //noStroke()
    //stroke(255)
    noFill();
    
    stroke(color(255+this.x, 204-this.y, this.x/this.y*100))

    for (let i=0;i<3;i++) {
         let near = nearest(this.x,this.y,bugs,i)
         if (distance(this.x,this.y,mouseX,mouseY)<100) {
    //bugs[i].x += sin(d+bugs[i].n)*2//this.newx  //lerp(this.x,this.newx,0.005)
    //bugs[i].y -= cos(d+bugs[i].n)*2 //this.newy //lerp(this.y,this.newy,0.005)
			//bugs[i].x += sin(t/10);
			//bugs[i].y -= cos(t/10);
					 vertex(mouseX, mouseY);
    }
        // quadraticVertex(near.x+80, near.y+20, near.x+50,near.y+50);
         vertex(near.x, near.y);
        //line(this.x,this.y,near.x,near.y)
    }
    endShape(CLOSE);
  }
}