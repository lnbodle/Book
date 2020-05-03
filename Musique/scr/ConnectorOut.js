class ConnectorOut extends Connector {
   
  constructor(name, x, y, w, h, module) {
    super(name, x, y, w, h, module)
    this.color = color(150,150,150)
  }
  
  set(v) {
    this.value = v;
  }
  
}