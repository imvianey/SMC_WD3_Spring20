  
 var canvas = document.getElementById("myCanvas");
 var context = canvas.getContext("2d");

 var ballColor = 'rgb(100, 205, 120)';
 var ballPosX = canvas.width/2;
 var ballPosY = canvas.height/2;
 var ballRadius = 50;

 var ballSpeedX = 3;
 var ballSpeedY = 2;

 var animate = function(){
   context.clearRect(0, 0, canvas.width, canvas.height);


   context.fillStyle = ballColor;
   context.beginPath();
   context.arc(ballPosX, ballPosY, ballRadius, 0, 2*Math.PI);
   context.fill();

   if((ballPosX + ballRadius >= canvas.width) || (ballPosX - ballRadius) <= 0){
     ballSpeedX = ballSpeedX * -1;
   }

   if( ( ballPosY + ballRadius >= canvas.height) || ( ballPosY - ballRadius <= 0) ){
     ballSpeedY = ballSpeedY * -1;
   }

   ballPosX = ballPosX + ballSpeedX;
   ballPosY = ballPosY + ballSpeedY;


   window.requestAnimationFrame(animate);
 }

 animate();

//  CHANGE BALL SPEED ON CLICK
 canvas.addEventListener("click", function(event){
   var distX = Math.abs(ballPosX - event.offsetX);
   var distY = Math.abs(ballPosY - event.offsetY);

   if(distX < ballRadius && distY < ballRadius){
     ballSpeedX = (Math.floor(Math.random() * 10));
   }
 })

//  SCORE COUNT
 var button = document.getElementById("scoreCount"),
  count = 0;
  canvas.onclick = function() {
  var distX = Math.abs(ballPosX - event.offsetX);
  var distY = Math.abs(ballPosY - event.offsetY);
  if(distX < ballRadius && distY < ballRadius){
    count += 1;
    button.innerHTML = "Score: " + count;
  }
};


// RANDOM COLOR CHANGE
const randomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  ballColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
colorButton.addEventListener("click", randomColor);
randomColor();