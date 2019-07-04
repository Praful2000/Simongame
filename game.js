
  var buttonColours = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var userClickedPattern = [];

  var started = false;
  var level = 0;
$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function ()
 {

   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);

   playsound(userChosenColour);
   animatePress(userChosenColour);

   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
   checkAnswer(userClickedPattern.length-1);
});


function nextSequence()
{
 userClickedPattern = [];
  level++;
$("h1").text("Level "+level);
  randomNumber = Math.floor(4*Math.random());
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



}
function playsound(name)
{

  if(name=="red")
  {

   var audio = new Audio("sounds/red.mp3");
    audio.play();

  }
  if(name=="blue")
  {

   var audio = new Audio("sounds/blue.mp3");
     audio.play();

  }
  if(name=="green")
  {

   var audio = new Audio("sounds/green.mp3");
     audio.play();

  }
  if(name=="yellow")
  {

   var audio = new Audio("sounds/yellow.mp3");
    audio.play();

  }

}
function animatePress(currentColor) {


  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function checkAnswer(currentLevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    var audio = new Audio("sounds/red.mp3");
     audio.play();
        $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over")
     }, 2000);
startover();



  }


}
function startover()
{

    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;
    $("h1").text("Press A key to start");
}
