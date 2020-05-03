class Canvas {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.Elements = []
    this.fabric = new Fabric(this)
    this.moduleTypes = [MSynthesizer,MSequencer,MRandom,MNoise,MSlider,MOperator,MTime]
    this.clicked = false;
    this.menuShow = false;
  }

  getElementByClass(n) {
    let elements = []
    for (let i = 0; i < canvas.Elements.length; i++) {
      let e = canvas.Elements[i];
      if (e.constructor.name == n) {
        elements.push(e);
      }
    }
    return elements
  }

  mouseInRect(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      return true
    }
    return false;
  }

  draw() {
    noStroke()
    if (this.menuShow) {
      for (let i = 0; i < this.moduleTypes.length; i++) {
        let pos = [this.x, this.y + i * 16 +16, 100, 16]
        if (this.mouseInRect(pos[0],pos[1],pos[2],pos[3])) {
          fill(255)
          if (this.clicked) {
            this.fabric.createModule(this.moduleTypes[i], this.x + this.w / 2, this.y + this.h / 2)
          }
        } else {
          fill(255, 150)
        }
        rect(pos[0],pos[1],pos[2],pos[3])
        fill(0);
        text(this.moduleTypes[i].name, pos[0],pos[1]+10)
      }
      
    }
    fill(255)
    rect(this.x,this.y,48,16)
    fill(0)
    //text("Modules",this.x,this.y+9)
    if (this.mouseInRect(this.x, this.y,48,16)) {
       if (this.clicked) {
          if (this.menuShow) {
            this.menuShow = false;
          } else {
            this.menuShow = true;
          }
       }
    }
    this.clicked = false;
  }

  update() {
    for (let i = 0; i < this.Elements.length; i++) {
      let e = this.Elements[i]
      
      e.clicked = this.clicked;

      if (e instanceof Connector) {
        e.baseUpdate();

      }
      e.draw()
      e.update();
      if (e instanceof Module) {
        e.baseUpdate();

      }
      
    }
  }

}