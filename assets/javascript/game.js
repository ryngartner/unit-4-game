
var randomNumber = 0;
var win = 0;
var lost = 0;
var playerNumber;

// Building the Crystal image using a FOR loop
for(var i = 0; i < 4; i ++){
    
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');
    
    $(".crystals").append(crystal);
}





// <!-- Pseudo Code -->
// <!-- Crystal Collector -->
// <!-- randomNumber - from 19 - 120 -->
// <!-- 4 Crystals  -->
// <!-- Every Crystal has a hidden randomNumber from 1 - 12 -->
// <!-- Clicking on the Crystal will increase your score - adding to the previous result -->
// <!-- If player's score equals randomNumber - player wins -->
// <!-- If player's score is greater than the randomNumber - player loses-->
// <!-- If player wins - player gets a win point - increment win counter-->
// <!-- If player loses - player gets a loss point - increment loss counter -->
// <!-- Game resets on win or lose -->