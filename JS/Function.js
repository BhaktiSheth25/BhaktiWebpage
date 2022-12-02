let val=0
let slPosV, slPosH, sliderSW, sliderSS
function setup() {
  createCanvas(1500, 1000);
  
  fill(255, 0, 0);
  
  slPosH = createSlider(1, 10, 4);
  slPosH.position(10, 90);
  slPosH.style('width', '300px');
  
  slPosV = createSlider(1, 10, 4);
  slPosV.position(10, 70);
  slPosV.style('width', '300px');
  
   sliderSW = createSlider(1,20,2);
   sliderSW.position(10, 50)
   sliderSW.style('width', '80px');
  
   sliderSS = createSlider(10,300,80);
   sliderSS.position(10, 30)
   sliderSS.style('width', '80px');
  
}

function draw() {
  background(220);
 let
     val1 = sliderSW.value(); val2 = sliderSS.value();
  
    {
      for(j=0; j<slPosV.value();j++)
      for(i=0; i<slPosH.value(); i++)
        {
          if(i%2 && j%2)
          {
            fill("red")
          }
        else
          {
            fill("lightblue")
          }
          rect((i*50)+20, (j*50)+130, val2, val2)
          strokeWeight(val1)
        }
    }
  text("PosV", 320, 105)
  text("PosH", 320, 85)
  text("SW", 100, 65)
  text("SS", 100, 40)
  
   
  
}