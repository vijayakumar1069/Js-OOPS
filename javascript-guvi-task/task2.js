class Circle {
    constructor(radius = 1, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    // Getter for radius
    getRadius() {
      return this.radius;
    }
  
    // Setter for radius
    setRadius(newRadius) {
      this.radius = newRadius;
    }
  
    // Getter for color
    getColor() {
      return this.color;
    }
  
    // Setter for color
    setColor(newColor) {
      this.color = newColor;
    }
  
    // Calculate and return the area of the circle
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    // Calculate and return the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Custom toString method to display circle information
    toString() {
      return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
  }
  
  // Example usage:
  
  const circle1 = new Circle(); // Create a default circle with radius 1 and color "red"
  const circle2 = new Circle(3); // Create a circle with radius 3 and default color "red"
  const circle3 = new Circle(2, "blue"); // Create a circle with radius 2 and color "blue"
  
  console.log(circle1.toString()); // Output: Circle [radius=1, color=red]
  console.log(circle2.toString()); // Output: Circle [radius=3, color=red]
  console.log(circle3.toString()); // Output: Circle [radius=2, color=blue]
  
  console.log(circle1.getArea()); // Output: 3.141592653589793 (approximately)
  console.log(circle2.getCircumference()); // Output: 18.84955592153876 (approximately)
  
  // Update the radius and color
  circle1.setRadius(4);
  circle1.setColor("green");
  
  console.log(circle1.toString()); // Output: Circle [radius=4, color=green]
  