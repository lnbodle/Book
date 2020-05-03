class MTime extends Module {
   constructor(x,y) {
      super(x,y,32,16);
      this.color = color(255, 204, 204)
      this.time = canvas.fabric.createConnector(ConnectorOut,"hey",32,0,this);
      this.t = 0;
   }
  
  update() {
      this.t++;
      this.time.set(this.t);
  }
  
}