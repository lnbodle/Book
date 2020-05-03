class Module extends Element {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.dragged = false;
  }
  baseUpdate() {
    text(this.className,this.x,this.y)
    this.clicked = false;
    //If mouse pressed drag the module
    if (mouseIsPressed && mouseButton == LEFT) {
      if (this.pointIn(mouseX, mouseY) && !dragging) {
        this.dragged = true;
      }
    } else {
      this.dragged = false;
      dragging = false;
    }
    //If dragged set the module at mouse position
    if (this.dragged) {
      if (keyIsPressed && key == 'SHIFT') this.remove()
      this.x = mouseX - this.w / 2;
      this.y = mouseY - this.h / 2;
      dragging = true;
    }
    //Keep the module inside his canvas
    if (this.x + this.w > canvas.x+canvas.w) this.x = canvas.x+canvas.w-this.w
    if (this.x < canvas.x) this.x = canvas.x
    if (this.y + this.h > canvas.y+canvas.h) this.y = canvas.y+canvas.h-this.h
    if (this.y < canvas.y) this.y = canvas.y
  }
  update(){}
}