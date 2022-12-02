function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  if(mouseX>200)
    {
      fill("blue")
    }
  else{
    fill("red")
  }
  rect(mouseX,mouseY,50,50)
}

function setup() {
  createCanvas(400, 400);
  background("black");
}