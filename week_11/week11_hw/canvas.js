 var canvas = document.getElementById("myCanvas");
 var context = canvas.getContext("2d");

 var ballColor = '#fff';
 var ballPosX = canvas.width / 2;
 var ballPosY = canvas.height / 2;
 var ballRadius = 50;

 var ballSpeedX = 3;
 var ballSpeedY = 2;

 var animate = function () {
   context.clearRect(0, 0, canvas.width, canvas.height);

   context.fillStyle = ballColor;
   context.beginPath();
   context.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
   context.fill();
   context.shadowBlur = 20;
   context.shadowColor = "white";

   if ((ballPosX + ballRadius >= canvas.width) || (ballPosX - ballRadius) <= 0) {
     ballSpeedX = ballSpeedX * -1;
   }

   if ((ballPosY + ballRadius >= canvas.height) || (ballPosY - ballRadius <= 0)) {
     ballSpeedY = ballSpeedY * -1;
   }

   ballPosX = ballPosX + ballSpeedX;
   ballPosY = ballPosY + ballSpeedY;


   window.requestAnimationFrame(animate);
 }

 animate();


 //  CHANGE BALL SPEED ON CLICK
 canvas.addEventListener("click", function (event) {
   var distX = Math.abs(ballPosX - event.offsetX);
   var distY = Math.abs(ballPosY - event.offsetY);
   var colors = ['#ffb3b3', '#ff8080', '#ff4d4d', '#ff4d4d'];

   if (distX < ballRadius && distY < ballRadius) {
     ballSpeedX = (Math.floor(Math.random() * 10));
   }

   if (distX < ballRadius && distY < ballRadius) {
     ballColor = colors[Math.floor(Math.random() * colors.length)];
   }
 })

 //  SCORE COUNT
 var button = document.getElementById("scoreCount"),
   count = 0;
 canvas.onclick = function () {
   var distX = Math.abs(ballPosX - event.offsetX);
   var distY = Math.abs(ballPosY - event.offsetY);
   if (distX < ballRadius && distY < ballRadius) {
     count += 1;
     button.innerHTML = "SCORE: " + count;
   }
 };

 colorButton.addEventListener("click", function (event) {
   ballColor = '#fff';
 });