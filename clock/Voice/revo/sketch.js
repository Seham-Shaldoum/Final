//variables
let font;
let font2;
let Text = "Night Owls are living in a morning lark`s world.\nMaybe it is time for a REVOLUTION!"
let text2 = "It`s theorized that lower level of brain connectivity\ncause night owls to just have poorer attention,\nslower reaction, and increased sleepiness throughout\nthe hours of a typical work day.\nMany studies suggest that the righid\n9 to 5 schedule might need to CHANGE."
let text3 = "People could be physically and mentally\nhealthier, happier, and more productive\nif they were given leeway\nto adjust their schedules.\n+ Our world can be productive 24/7\nwith no traffic problems!"
var gif_createImg;
function preload() {    //preloading the Gif/font
  font = loadFont("Bungee-Regular.ttf");
  font2 = loadFont("DarkerGrotesque-Light.ttf");
  gif_createImg = createImg("world.gif");
}

//setting up 3d canvas size of the screen
function setup() {
createCanvas(windowWidth, windowHeight,WEBGL);
 textFont(font);
  textSize(windowWidth*0.03);

// c1 = color(28,190,180);
// c2 = color(251, 136, 163);  colors used


 
}

function draw() {
background(0);
textFont(font);                  //styling the title text
textSize(windowWidth*0.03);
fill(28,190,180);
textAlign(CENTER);
push();
translate(0,tan(frameCount*0.007)*30);
text(Text, 0, -300);
pop();

  

 textFont(font2);                         //styling the texts to the left 
textSize(windowWidth*0.015);
fill(251, 136, 163);
push();
 rotateY(frameCount*0.000045);
text(text2, -520, 50);
pop();


 textFont(font2);                              //styling the texts to the right
textSize(windowWidth*0.015);
fill(251, 136, 163);
push();
 rotateY(frameCount*0.000045);
text(text3, 440, 50);
pop();

   gif_createImg.position(windowWidth/3, windowHeight/3);      //gif position
  
}





function windowResized() {
resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
}

