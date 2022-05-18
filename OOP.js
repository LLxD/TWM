//classes and OOP
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  showValues() {
    console.log(this.width, this.height)
  }

  calculateArea() {
    console.log(this.width * this.height)
  }
}
const myRectangle = new Rectangle(10, 20)
myRectangle.showValues()
myRectangle.calculateArea()
