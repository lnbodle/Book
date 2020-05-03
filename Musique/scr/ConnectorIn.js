class ConnectorIn extends Connector {
  constructor(name, x, y, w, h, module) {
    super(name, x, y, w, h, module)
    this.output = null;
    this.connecting = false;
  }

  update() {
   
    if (this.output == null) {
      
      if (mouseIsPressed && mouseButton == LEFT) {
        if (this.pointIn(mouseX, mouseY) && !dragging) {
          this.connecting = true
        }
      } else {
        this.connecting = false;
        dragging = false;
      }
    } else {
      if (mouseIsPressed && mouseButton == RIGHT) {
        if (this.pointIn(mouseX, mouseY) && !dragging) {
          this.output = null;
        }
      }
    } 
    
    if (this.output != null) {
      this.value = this.output.value;
      this.color = this.output.module.color//color(10,45,160)
    } else {
      this.color = color(255)
    }
    
    if (this.connecting) {
      dragging = true;
      let outs = this.canvas.getElementByClass(ConnectorOut.name);
      for (let i = 0; i < outs.length; i++) {
        let e = outs[i];
        if (e.pointIn(mouseX, mouseY) && e != this && typeof e.value == typeof this.value && this.module != e.module) {
          this.output = e;
          this.connecting = false;
          dragging = false;
        }
      }
    }
    //Draw the connections 
    if (this.connecting) {
      this.drawLine(this.x, this.y, mouseX, mouseY);
    }
    if (this.output != null) this.drawLine(this.x, this.y, this.output.x, this.output.y);
  }
  
  hasOutput () {
     if (this.output != null) return true
     return false;
  }
  
  get(min, max) {
    return map(this.value,0,100,min,max);
  }
  
  drawLine(x1,y1,x2,y2) {
    noFill()
    stroke(255,255)
    strokeWeight(3);
    beginShape()
        curveVertex(x1 + this.w/2,y1 + this.h/2)
    
        curveVertex(x1 + this.w/2,y1 + this.h/2)

    
        curveVertex(x2 - (x2-x1)/2 + this.w/2,60 + y2 - (y2-y1)/2 + this.h/2)
    
     
    
        curveVertex(x2 + this.w/2,y2 + this.h/2)
    
        curveVertex(x2 + this.w/2,y2 + this.h/2)
  
    endShape();
    strokeWeight(1);
  }


}