$(document).ready(function() {
  //window.characters = [];
  window.characters = {};
  window.index = 0;
  window.count = 0; 


  
  var makeMushroom = function(){
    var character = new Mushroom(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000 + 3000
    );
    $('body').append(character.$node);
    window.characters[index] = character;
    index++;
    setTimeout(makeMushroom, 5000);
    
    
  };
  makeMushroom(); 


  var timer = function(){
    document.getElementById("count").innerHTML = "Mushrooms Eaten: " + window.count; 
    setTimeout(timer, 200);
  };
  timer();



  $('.addCharacterButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-character
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-character-maker-function-name" attribute of a
     * class="addCharacterButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the character.
     */

    /* characterMakerFunctionName is a string which must match
     * one of the character maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var characterMakerFunctionName = $(this).data('character-maker-function-name');

    // get the maker function for the kind of character we're supposed to make
    var characterMakerFunction = window[characterMakerFunctionName];

    // make a character with a random position

    var character = new characterMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000 + 3000, index
    );
    $('body').append(character.$node);
    //window.characters.push(character);
    window.characters[index] = character;
    index++;
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i in window.characters) {
      window.characters[i].setPosition(window.innerHeight * 0.8, (window.innerWidth) / (window.characters.length + 1) * (i + 1));
    }
  });

});

