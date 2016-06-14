var SexyBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  BlinkyDancer.call(this, top, left, timeBetweenSteps); 
  //this.$node = $('<span class="dancer"> <img src="http://rs912.pbsrc.com/albums/ac325/shockcaptain117/banana_dance.gif~c200"> </span>');
  
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
  Dancer.prototype.step.call(this);
  //this.$node.animate({height: '+=150px'}, this.timeBetweenSteps);
  var quarterSpeed = this.timeBetweenSteps / 4;
  this.$node.animate({height: '300px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '300px', opacity: '0.8'}, quarterSpeed);
  this.$node.animate({height: '100px', opacity: '0.4'}, quarterSpeed);
  this.$node.animate({width: '100px', opacity: '0.8'}, quarterSpeed);
};