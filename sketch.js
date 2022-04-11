function setup() {
  createCanvas(710, 710, WEBGL);
}

function draw() {
  background(0);
  
  rotateX(frameCount * 0.001);
  for (let j = 0; j < 30; j = j+1) {
    for (let i = 0; i < 30; i = i+10) {
      translate(
        sin(frameCount * 0.09 + j)* 50,
        sin(frameCount * 0.09 + i)* 50,
        j * 5
      );
      rotateX(frameCount * 0.002);
      push();
      sphere(mouseX, 6, 4);
      pop();
    sphere(mouseX, 10, 10);
    sphere(5, 5, 7);
      sphere(8, 8, 7);
    }
     }
}