class MOperator extends Module {
   constructor(x,y) {
      super(x,y,32,16);
      this.color = color(255, 204, 204)
      this.a = canvas.fabric.createConnector(ConnectorIn,"hey",-8,0,this);
      this.b = canvas.fabric.createConnector(ConnectorIn,"hey",-8,8,this);
      this.out = canvas.fabric.createConnector(ConnectorOut,"hey",this.w,0,this);
      this.operatorIndex = 0;
      this.operators = ["+","-","*","/","%","^"];
      
   }
  
  update() {
      
      text(this.operators[this.operatorIndex],this.x,this.y);
      
    if (this.clicked && this.pointIn(mouseX,mouseY)) this.operatorIndex ++;
    this.operatorIndex = this.operatorIndex % this.operators.length;
      if (this.a.hasOutput() && this.b.hasOutput()) {
          
          switch(this.operatorIndex) {
            case 0 : this.out.set(this.a.value + this.b.value); break;
            case 1 : this.out.set(this.a.value - this.b.value); break;
            case 2 : this.out.set(this.a.value * this.b.value); break;
            case 3 : this.out.set(this.a.value / this.b.value); break;
            case 4 : this.out.set(this.a.value % this.b.value); break;
            case 5 : this.out.set(this.a.value ^ this.b.value); break;
          }
      }
      
  }
  
}