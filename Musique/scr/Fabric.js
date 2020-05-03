class Fabric {
  constructor(canvas) {
   this.canvas = canvas
  }
  
  createModule(moduleType,x,y) {
      let m = new moduleType(x,y)
      this.canvas.Elements.push(m)
      return m
  }
  
  createConnector(connectorType,name,x,y,module) {
      let c = new connectorType(name,x,y,8,8,module)
      this.canvas.Elements.push(c)
      return c
  }
  
}