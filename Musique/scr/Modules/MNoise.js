class MNoise extends Module {
   constructor(x,y) {
      super(x,y,32,16);
      this.color = color(255, 204, 204)
      this.floatOut = canvas.fabric.createConnector(ConnectorOut,"hey",32,0,this);
   }
  
  update() {
      this.floatOut.set(noise(frameCount/100)*100);
  }
  
}