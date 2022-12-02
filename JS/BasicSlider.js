let sliderR, sliderG, sliderB, sliderRA, sliderSW

function setup() {
  createCanvas(500, 500);
   sliderR = createSlider(0,255,0);
   sliderR.position(10, 10)
   sliderR.style('width', '80px');
  
   sliderG = createSlider(0,255,0);
   sliderG.position(10, 30)
   sliderG.style('width', '80px');
  
   sliderB = createSlider(0,255,0);
   sliderB.position(10, 50)
   sliderB.style('width', '80px');
  
   sliderRA = createSlider(10,300,80);
   sliderRA.position(10, 70)
   sliderRA.style('width', '80px');
  
   sliderSW = createSlider(1,20,2);
   sliderSW.position(10, 90)
   sliderSW.style('width', '80px');
}

function draw() {
  background(220);
  
  let val1 = sliderR.value(), val2 = sliderG.value(), val3 = sliderB.value(), val4 = sliderRA.value(), val5 = sliderSW.value();
  
  fill(val1, val2, val3);
  strokeWeight(val5)
  text("R", 100, 25)
  text("G", 100, 45)
  text("B", 100, 65)
  text("RA", 100, 85)
  text("SW", 100, 105)
  circle(250, 300, val4);
   
}