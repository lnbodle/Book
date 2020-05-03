class Connector extends Element {

  constructor(name,xOffset,yOffset,w,h,module) {
    super(0,0,w,h);
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.name = name;
    this.module = module;
    this.connecting = false;
    this.value = 0;
  }
  
  update() {}
  
  baseUpdate() {
    this.x = this.module.x + this.xOffset
    this.y = this.module.y + this.yOffset
  }
}