function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  CreateGrid (5,8, "r", "b", 45, 45)
  
  
}

function CreateGrid (hCount, vCount, uShape,wColor, sizeH, sizeV)
{
for(j=0; j<vCount; j++)
    {
      for(i=0; i<hCount; i++)
        {
        
          if(wColor == "R" || wColor == "R")
           {
            fill("red")
           }
        else if (wColor == "B" || wColor == "b")
          {
            fill("blue")
          }
          else
            {
              noFill()
            }
          
          if ( uShape == "R" || uShape == "r")
            {
              rect ((50*i)+10,(50*j)+10, sizeH, sizeV)
            }
          else if ( uShape == "C" || uShape == "c")
            {
              circle (50*i+45, 50*j+45, sizeH)
            }
          else
            {
              noFill()
              rect ((50*i)+10, (50*j)+10, 45, 45)
            }
        } 
    }
}