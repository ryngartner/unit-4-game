var randomNumber;
var wins = 0;
var losses = 0;
var past = 0;
var playerNumber;

var startGame = function(){

    $(".crystals").empty();

    randomNumber = Math.floor(Math.random() * 102) + 19;

    $("#result").html("Random Result:  " + randomNumber);
    
    for(var i = 0; i < 4; i ++){
    
        var random = Math.floor(Math.random() * 11) + 1;

        
    
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
    
            crystal.html(random)
    
        $(".crystals").append(crystal);
    }
    
}

startGame();


$(".crystal").on("click", function() {

    var num = parseInt($(this).attr("data-random"));

    past += num;

    console.log(past);

    if(past > randomNumber){
        losses--;

        $("#LOSSES").html(losses);

        past = 0;

        startGame();
        
    }
    else if(past === randomNumber){
        wins++;

        $("#WINS").html(wins);

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