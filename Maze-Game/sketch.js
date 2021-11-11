var player;
var gamestate=1;

function preload(){
shell1=loadImage("Images/yellow.png")
shell2=loadImage("Images/blue.png")
shell3=loadImage("Images/purple.png")
shell4=loadImage("Images/starfish.png")
shark=loadAnimation("Images/shark/1.png","Images/shark/2.png","Images/shark/3.png",
"Images/shark/4.png","Images/shark/5.png","Images/shark/6.png","Images/shark/7.png",
"Images/shark/8.png","Images/shark/9.png")
bg=loadImage("Images/bg.jpg");
seaweed=loadAnimation("Images/seaweed/1.png","Images/seaweed/2.png","Images/seaweed/3.png",
"Images/seaweed/4.png","Images/seaweed/5.png","Images/seaweed/6.png","Images/seaweed/7.png",
"Images/seaweed/8.png","Images/seaweed/9.png","Images/seaweed/10.png","Images/seaweed/11.png",
"Images/seaweed/12.png")
}

function setup() {
  createCanvas(600,600);
  player=createSprite(382,25,15,15);

shark1=createSprite(100,300)
shark1.addAnimation("moving",shark)
shark1.scale=0.7

seaweed1=createSprite(345,496);
seaweed1.addAnimation("moving1",seaweed)
seaweed1.scale=0.5

  shell1_1=createSprite(72,55)
  shell1_1.addImage(shell1)
  shell1_1.scale=0.11

  shell1_2=createSprite(512,42)
  shell1_2.addImage(shell1)
  shell1_2.scale=0.11

  shell1_3=createSprite(57,460)
  shell1_3.addImage(shell1)
  shell1_3.scale=0.10

  shell2_1=createSprite(52,201)
  shell2_1.addImage(shell2)
  shell2_1.scale=0.14

  shell2_2=createSprite(180,409)
  shell2_2.addImage(shell2)
  shell2_2.scale=0.14

  shell2_3=createSprite(391,187)
  shell2_3.addImage(shell2)
  shell2_3.scale=0.14

  shell3_1=createSprite(147,252)
  shell3_1.addImage(shell3)
  shell3_1.scale=0.07

  shell3_2=createSprite(510,243)
  shell3_2.addImage(shell3)
  shell3_2.scale=0.07

  shell3_3=createSprite(400,517)
  shell3_3.addImage(shell3)
  shell3_3.scale=0.07

  shell4_1=createSprite(432,395)
  shell4_1.addImage(shell4)
  shell4_1.scale=0.05

  shell4_2=createSprite(235,141)
  shell4_2.addImage(shell4)
  shell4_2.scale=0.05

  
  shell4_3=createSprite(267,322)
  shell4_3.addImage(shell4)
  shell4_3.scale=0.05

  //Borders
  wall1=new Wall (185, 10, 350, 5);
  wall2=new Wall (500, 10, 180, 5);
  wall3=new Wall (12, 298, 5, 580);
  wall4=new Wall (300, 586, 575, 5);
  wall5=new Wall (587, 120, 5, 220);
  wall6=new Wall (587, 438, 5,300);

  wall7=new Wall (411, 235, 2,450);
  wall8=new Wall (350, 185, 2,350);
  wall9=new Wall (568, 229, 40,2);
  wall10=new Wall (548, 229, 2,70);
  wall11=new Wall (518, 264, 60,2);
  wall12=new Wall (488, 165, 2,200);
  wall13=new Wall (518, 66, 60,2);
  wall14=new Wall (550, 85, 2,40);

  wall15=new Wall (555, 147, 60,2);
  wall16=new Wall (526, 165, 2,90);
  wall17=new Wall (450, 300, 2,470);
  wall18=new Wall (518, 303, 135,2);
  wall19=new Wall (558, 446, 2,230);
  wall20=new Wall (523, 332, 70,2);
  wall21=new Wall (488, 357, 2,50);
  wall22=new Wall (507, 383, 40,2);
  wall23=new Wall (486, 409, 70,2);
  wall24=new Wall (520, 445, 2,70);
  wall25=new Wall (499, 479, 40,2);
  wall26=new Wall (480, 458, 2,40);
  wall27=new Wall (520, 501, 75,2);
  wall28=new Wall (483, 519, 2,35);
  wall29=new Wall (358, 560, 400,2);
  wall30=new Wall (500, 536, 30,2);
  wall31=new Wall (544, 357, 30,2);
  wall32=new Wall (159, 435, 2,250);
  wall33=new Wall (325, 534, 250,2);
  wall34=new Wall (310, 460, 205,2);
  wall35=new Wall (208, 360, 2,200);
  wall36=new Wall (305, 496, 290,2);
  wall37=new Wall (200, 525, 2,20); 
  wall38=new Wall (275, 505, 2,20);
  wall39=new Wall (350, 525, 2,20);
  wall40=new Wall (330, 450, 2,20);
  wall41=new Wall (296, 440, 70,2);
  wall42=new Wall (300, 417, 130,2);
  wall43=new Wall (356, 425, 2,15);
  wall44=new Wall (365, 360, 30,2);
  wall45=new Wall (380, 340, 2,80);
  wall46=new Wall (380, 240, 2,60);
  wall47=new Wall (380, 140, 2,70);
  wall48=new Wall (380, 60, 2,30);
  wall49=new Wall (395, 270, 30,2);
  wall50=new Wall (364, 174, 30,2);
  wall51=new Wall (395, 74, 30,2);
  
  wall52=new Wall (370, 435, 30,2);
  wall53=new Wall (385, 418, 2,35);
  wall54=new Wall (355, 400, 60,2);
  wall55=new Wall (325, 225, 2,350);
  wall56=new Wall (236, 338, 2,155);
  wall57=new Wall (265, 262, 60,2);
  wall58=new Wall (295, 313, 2,100);
  wall59=new Wall (250, 301, 30,2);
  wall60=new Wall (280, 352, 30,2);
  wall61=new Wall (260, 395, 50,2);
  wall62=new Wall (143, 278, 130,2);
  wall63=new Wall (128, 311, 60,2);
  wall64=new Wall (98, 325, 2,30);
  wall65=new Wall (113, 340, 30,2);
  wall66=new Wall (395, 74, 30,2);
  wall67=new Wall (76, 317, 2,80);
  wall68=new Wall (85, 357, 90,2);
  wall69=new Wall (130, 458, 2,200);
  wall70=new Wall (70, 385, 60,2);

  wall71=new Wall (41, 469, 2,170);
  wall72=new Wall (76, 485, 2,195);
  wall73=new Wall (117, 558, 25,2);
  wall74=new Wall (104, 483, 2,150);
  wall75=new Wall (40, 293, 2,130);
  wall76=new Wall (165, 228, 250,2);
  wall77=new Wall (308, 51, 30,2);
  wall78=new Wall (294, 80, 2,60);
  wall79=new Wall (254, 111, 80,2);
  wall80=new Wall (214, 114, 2,160);
  wall81=new Wall (182, 114, 2,160);
  wall82=new Wall (113, 35, 140,2);
  wall83=new Wall (43, 25, 2,22);
  wall84=new Wall (40, 72, 50,2);
  wall85=new Wall (64, 97, 2,50);
  wall86=new Wall (105, 122, 80,2);
  wall87=new Wall (144, 95, 2,50);
  wall88=new Wall (117, 71, 50,2);
  wall89=new Wall (104, 87, 2,30);

  wall90=new Wall (165, 193, 30,2);
  wall91=new Wall (149, 174, 2,40);
  wall92=new Wall (92, 180, 110,2);
  wall93=new Wall (38, 164, 2,30);
  wall94=new Wall (95, 138, 2,30);
  wall95=new Wall (238, 33, 50,2);
  wall96=new Wall (254, 195, 80,2);
  wall97=new Wall (263, 70, 60,2);
  wall98=new Wall (293, 160, 60,2);

}

function draw() {
  background(bg);  
  textSize(18)
  text(mouseX+ "," +mouseY, mouseX,mouseY);

  if(gamestate===1){

    fill('black');
    textSize(18);
    text (" Press space to start the game", 170, 300);

    if(keyDown("Space")){
      gamestate=2
    }

  }

  else if(gamestate===2){

  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()

  wall7.display()
  wall8.display()
  wall9.display()
  wall10.display()
  wall11.display()
  wall12.display()
  wall13.display()
  wall14.display()
  wall15.display()
  wall16.display()
  wall17.display()
  wall18.display()
  wall19.display()
  wall20.display()
  wall21.display()
  wall22.display()
  wall23.display()
  wall24.display()
  wall25.display()
  wall26.display()
  wall27.display()
  wall28.display()
  wall29.display()
  wall30.display()
  wall31.display()
  wall32.display()
  wall33.display()
  wall34.display()
  wall35.display()
  wall36.display()
  wall37.display()
  wall38.display()
  wall39.display()
  wall40.display()
  wall41.display()
  wall42.display()
  wall43.display()
  wall44.display()
  wall45.display()
  wall46.display()
  wall47.display()
  wall48.display()
  wall49.display()
  wall50.display()
  wall51.display()
  wall52.display()
  wall53.display()
  wall54.display()
  wall55.display()
  wall56.display()
  wall57.display()
  wall58.display()
  wall59.display()
  wall60.display()
  wall61.display()
  wall62.display()
  wall63.display()
  wall64.display()
  wall65.display()
  wall66.display()
  wall67.display()
  wall68.display()
  wall69.display()
  wall70.display()

  wall71.display()
  wall72.display()
  wall73.display()
  wall74.display()
  wall75.display()
  wall76.display()
  wall77.display()
  wall78.display()
  wall79.display()
  wall80.display()
  wall81.display()
  wall82.display()
  wall83.display()
  wall84.display()
  wall85.display()
  wall86.display()
  wall87.display()
  wall88.display()
  wall89.display()
  wall90.display()
  wall91.display()
  wall92.display()
  wall93.display()
  wall94.display()
  wall95.display()
  wall96.display()
  wall97.display()
  wall98.display()
  drawSprites();
  }
  
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    player.y=player.y-20
  }
  if(keyCode===DOWN_ARROW){
    player.y=player.y+20
  }
  if(keyCode===RIGHT_ARROW){
    player.x=player.x+20
  }
  if(keyCode===LEFT_ARROW){
    player.x=player.x-20
  }
}