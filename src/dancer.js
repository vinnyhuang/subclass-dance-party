// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"> <img src="http://orig02.deviantart.net/7a2d/f/2013/232/7/f/runin__like_a_new_super_mario_brother_by_neoweegee-d6iy5bv.gif" > </span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

/*Dancer.prototype.step2 = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log("abdc");
  setTimeout(this.step2, this.timeBetweenSteps);
};*/

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};