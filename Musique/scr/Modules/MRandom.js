class MRandom extends Module {
  constructor(x, y) {
    super(x, y, 32, 16);
    this.color = color(255, 102, 153)
    this.floatOut = canvas.fabric.createConnector(ConnectorOut, "hey", this.w, 0, this);
    this.speed = canvas.fabric.createConnector(ConnectorIn, "hey", -8, 0, this);
    this.time = 0;
    this.rnd = 0;
  }

  update() {
    this.time++;
    if (this.speed.hasOutput()) {
      if (this.time % this.speed.get(1,10) == 0) {
          this.rnd = random(0,100);
      }
    } else {
          this.rnd = random(0,100);
    }
    this.floatOut.set(this.rnd);
  }

}