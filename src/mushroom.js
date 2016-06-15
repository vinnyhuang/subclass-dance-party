var Mushroom = function(top, left, timeBetweenSteps, index) { 
  Mario.call(this, top, left, timeBetweenSteps, index); 
  this.$node = $('<span class="character"> <img src="http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Retro-Mushroom-Super-3-icon.png" height="50" width="50"> </span>');
  this.setPosition(window.innerHeight * (0.65+ Math.random()*0.1), left);
  this.step();
  //this.setSize(50, 50);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  setTimeout(function(){
    return this.removeSelf();
  }.bind(this), 10000);
  //console.log(this.step2);

  /*var oldStep = this.step;
  console.log(this.oldStep);
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //console.log(this.step);
    this.$node.toggle();
    console.log("def");
  };
  this.step();
  console.log(this.step);*/
};

Mushroom.prototype = Object.create(Mario.prototype);
Mushroom.prototype.constructor = Mushroom;

Mushroom.prototype.step = function() {

  this.timeBetweenSteps = 100;
  for (var i in window.characters) {
    var character = window.characters[i];
    if (window.characters[i].constructor === Mario) {
      if (Math.abs(parseInt(this.$node.css("left"), 10) - 
                   parseInt(character.$node.css("left"), 10)) <= 30 &&
          Math.abs(parseInt(this.$node.css("top"), 10) - 
                   parseInt(character.$node.css("top"), 10)) <= 30) {
        character.size = 2;
        character.setPosition(0.77 * window.innerHeight);
        this.removeSelf();
        //delete window.characters[this.index];
        window.count++; 
        console.log(window.count);
      }
    }
  }
  if (this.exists === true) {
    Character.prototype.step.call(this);
    //console.log("abc");
  }

  //this.$node.animate({height: '+=150px'}, this.timeBetweenSteps);
  /*var quarterSpeed = this.timeBetweenSteps / 4;
  this.$node.animate({height: '300px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '300px', opacity: '0.8'}, quarterSpeed);
  this.$node.animate({height: '100px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '100px', opacity: '0.8'}, quarterSpeed);*/
};