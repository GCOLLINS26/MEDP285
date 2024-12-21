
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noFill();
  stroke(23, 48, 82); // Dark blue for the stroke color
  describe(
    'An abstract, dynamic 3D scene of spheres arranged in a spiral, with interactive controls.'
  );
}

function draw() {
  background(219, 225, 232); 

  
  orbitControl();

 
  let radius = 200; 
  let angleIncrement = 15; 

  // Spiral arrangement of spheres
  for (let angle = 0; angle < 360 * 2; angle += angleIncrement) {
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    let z = angle * 2; 
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    
    translate(x, y, z);
    sphere(30);
    pop();
  }
}