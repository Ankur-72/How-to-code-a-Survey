var database;
var form,survey,voter;
var canvas;
var voterCount = 0;


function setup(){
  createCanvas(1000,800);

  database = firebase.database();

  survey = new Survey();
  survey.start();

}

function draw(){
  background("#FF66CC");
 
    drawSprites();
  
}
