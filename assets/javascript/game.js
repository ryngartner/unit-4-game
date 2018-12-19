var randomNumber;
var wins = 0;
var losses = 0;
var past = 0;
var playerNumber;

// Starting  and restarting the game
var startGame = function(){

    // Emptying the crystals on start and restart
    $(".crystals").empty();

    // Images
    var images = ["assets/images/emerald.png",
     "assets/images/kinetic_Crystal.jpg",
      "assets/images/lemonquartz.jpg",
        "assets/images/red lotus.jpg"];

    // Generating a random number betweenm 19 and 120

    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#result").html("Random Result:  " + randomNumber);

    // Looping four times creating a random number
    for(var i = 0; i < 4; i ++){
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random             
            });
            crystal.css({
                "background-image":"url('"  + images[i] + "')",
                "background-size":"cover"
            });
        $(".crystals").append(crystal);
    }
    $("#past").html("Total Score: " + past);
    
}
startGame();

$(document).on("click", ".crystal", function() {
    var num = parseInt($(this).attr("data-random"));
    past += num;
    $("#past").html("Total Score: " + past);

    console.log(past);

    if(past > randomNumber){
        losses++;
        $("#LOSSES").html("Lost: " + losses);
        past = 0;
        startGame();
        
    }
    else if(past === randomNumber){
        wins++;
        $("#WINS").html("Wins: " + wins);
        past = 0;
        startGame();
    }
});

// <!-- Pseudo Code -->
// <!-- Crystal Collector -->
// <!-- Randomly generated number from 19 - 120 -->
// <!-- 4 Crystals  -->
// <!-- Every Crystal has a hidden random number from 1 - 12 -->
// <!-- Clicking on the Crystal will increase your score - adding to the previous result -->
// <!-- If player's score equals Randomly Generated Number - player wins -->
// <!-- If player's score is greater than the Random Genrated Number - player loses-->
// <!-- If player wins - player gets a win point - increment win counter-->
// <!-- If player loses - player gets a loss point - increment loss counter -->
// <!-- Game resets on win or lose -->