// Creates and returns a new character object that can step
var Character = function(top, left, timeBetweenSteps, index) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="character"> <img src="http://orig02.deviantart.net/7a2d/f/2013/232/7/f/runin__like_a_new_super_mario_brother_by_neoweegee-d6iy5bv.gif" > </span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.index = index;
  this.exists = true;

  // now that we have defined the character object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Character.prototype.step = function() {
  // the basic character doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

/*Character.prototype.step2 = function() {
  // the basic character doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log("abdc");
  setTimeout(this.step2, this.timeBetweenSteps);
};*/

Character.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Character.prototype.setSize = function(height, width) {
  var styleSettings = {
    height: height + 'px',
    width: width + 'px'
  };
  this.$node.css(styleSettings);
};

Character.prototype.removeSelf = function() {
  var index;
  for (var i = 0; i < window.characters.length; i++) {
    if (window.characters[i] === this) {
      index = i;
    }
  }
  //delete window.characters[this.index]; //=== undefined;
  this.$node.remove();
  this.exists = false;
};