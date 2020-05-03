class MSequencer extends Module {
   constructor(x,y) {
      super(x,y,32,16);
      this.color = color(255, 204, 204);
      this.float = canvas.fabric.createConnector(ConnectorOut,"float",32,8,this);
      this.values = [0,0,0,0,0,0,0,0];
      this.index = 0;
      this.speed = 0.1;
   }
  
  update() {
      this.index += this.speed;
      let amp = this.values[floor(this.index) % this.values.length];
      this.float.set(amp);
      //Draw the sequences [] [] [] [] [] [] [] []
      for (let i = 0 ; i < this.values.length ; i++) {
          if (this.values[i] == 0) {
              fill(0);
            } else {
              fill(255);
            }
          let x = this.x + this.w + i * 12;
          let y = this.y;
          let w = 8;
          let h = 8;
          rect(x,y,w,h);
          if (this.clicked && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h) {
            if (this.values[i] == 0) {
              this.values[i] = 1;
            } else {
              this.values[i] = 0;
            }
          }
      }
  }
  
}