var cat ;
var catImage,catImage1,catImage3;
var rat;
var ratImage,ratImage1,ratImage3;
var garden,gardenImage;

function preload() {
    //load the images here
    catImage=loadImage("images/cat1.png");
    catImage1=loadImage("images/cat2.png","images/cat3.png");
    catImage3=loadImage("images/cat4.png");

    ratImage=loadImage("images/mouse1.png");
    ratImage1=loadImage("images/mouse2.png","images/mouse3.png");
    ratImage3=loadImage("images/mouse4.png");

    gardenImage=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(870,600,20,20);
    cat.addAnimation("catsitting",catImage);
    cat.scale=0.2;

    rat=createSprite(200,600,20,20);
    rat.addAnimation("mousestanding",ratImage);
    rat.scale=0.15;

    
    


}

function draw() {
background(gardenImage);
    
    //Write condition here to evalute if tom and jerry collide
text(mouseX+','+mouseY,10,45);
if(cat.x-rat.x<(cat.width-rat.width)/2){
cat.velocityX=0;

cat.addAnimation("catlastImage",catImage3);
cat.x=300;        
cat.scale=0.2;
cat.changeAnimation("catlastImage");
rat.addAnimation("ratlastImage",ratImage3)
rat.scale=0.15;
rat.changeAnimation("ratlastImage");
}
drawSprites();

}

function keyPressed(){

 if(keyCode===LEFT_ARROW){
     cat.velocityX=-5;
     cat.addAnimation("catrunning",catImage1);
     cat.changeAnimation("catrunning");
     rat.addAnimation("ratfirstImage",ratImage1);
     rat.changeAnimation("ratfirstImage")
 }
}
