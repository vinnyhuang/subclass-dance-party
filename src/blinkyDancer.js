var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"> <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"> </span>');
  
  Dancer.call(this, top, left, timeBetweenSteps); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = 100;
  this.left = 100;
  this.d = 200;
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

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // Dancer.prototype.setPosition.call(this,this.top);
  // this.top -= 10;
  
  //this.left += 10;
  var move = function() {
    this.d *= -1;
    var movement = '+=' + this.d + 'px';
    //var scale = 'scale(' + this.d + ',1)';
    this.$node.animate({left: movement}, this.timeBetweenSteps, function() {
      if (this.d < 0) {
        this.$node.css("transform", "scale(-1,1)");
      } else {
        this.$node.css("transform", "");
      }
    }.bind(this));
  };
  move.call(this);
  //this.$node.toggle();
};