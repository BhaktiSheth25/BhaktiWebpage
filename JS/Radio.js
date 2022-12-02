let val=0
let sliderR, sliderG, sliderB
function setup() {
  createCanvas(500, 500);
  
  radio = createRadio();
  radio.option('Rectangle');
  radio.option('Circle');
  radio.option('Rounded Rectangle');
  radio.position(200,25)
  radio.style('width', '300px');
  textAlign(CENTER);
  
  fill(255, 0, 0);
  
  sliderR = createSlider(0,255,0);
   sliderR.position(10, 10)
   sliderR.style('width', '80px');
  
   sliderG = createSlider(0,255,0);
   sliderG.position(10, 30)
   sliderG.style('width', '80px');
  
   sliderB = createSlider(0,255,0);
   sliderB.position(10, 50)
   sliderB.style('width', '80px');
  
}

function draw() {
  background(220);
  let val = radio.value();
  
   let val1 = sliderR.value(), val2 = sliderG.value(), val3 = sliderB.value()
   
  if(val == "Rectangle")
    {
      rect(120, 120, 100, 100)
    }
  else if(val =="Circle")
    {
      circle(150, 150, 150)
    }
  else if(val == "Rounded Rectangle")
    {
      rect(120, 120, 100, 100, 10)
    }
  fill(val1, val2, val3);
  text("R", 100, 25)
  text("G", 100, 45)
  text("B", 100, 65)
}