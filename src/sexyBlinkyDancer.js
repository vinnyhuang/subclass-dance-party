var SexyBlinkyDancer = function(top, left, timeBetweenSteps, index) { 
  BlinkyDancer.call(this, top, left, timeBetweenSteps, index); 
  this.$node = $('<span class="dancer"> <img src="http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Retro-Mushroom-Super-3-icon.png" height="50" width="50"> </span>');
  this.setPosition(window.innerHeight * (0.65+ Math.random()*0.1), left);
  this.step();
  //this.setSize(50, 50);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

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

SexyBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
SexyBlinkyDancer.prototype.constructor = SexyBlinkyDancer;

SexyBlinkyDancer.prototype.step = function() {

  this.timeBetweenSteps = 100;
  for (var i in window.dancers) {
    var dancer = window.dancers[i];
    if (window.dancers[i].constructor === BlinkyDancer) {
      if (Math.abs(parseInt(this.$node.css("left"), 10) - 
                   parseInt(dancer.$node.css("left"), 10)) <= 30 &&
          Math.abs(parseInt(this.$node.css("top"), 10) - 
                   parseInt(dancer.$node.css("top"), 10)) <= 30) {
        dancer.size = 2;
        dancer.setPosition(0.77 * window.innerHeight);
        this.removeSelf();
        //delete window.dancers[this.index];
        window.count++; 
        console.log(window.count);
      }
    }
  }
  if (this.exists === true) {
    Dancer.prototype.step.call(this);
    //console.log("abc");
  }

  //this.$node.animate({height: '+=150px'}, this.timeBetweenSteps);
  /*var quarterSpeed = this.timeBetweenSteps / 4;
  this.$node.animate({height: '300px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '300px', opacity: '0.8'}, quarterSpeed);
  this.$node.animate({height: '100px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '100px', opacity: '0.8'}, quarterSpeed);*/
};