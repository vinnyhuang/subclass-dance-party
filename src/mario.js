var Mario = function(top, left, timeBetweenSteps, index) {
  

  Character.call(this, top, left, timeBetweenSteps); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = 100;
  this.left = 100;
  this.d = window.innerWidth - 90 ;
  this.size = 1;
  this.setPosition(window.innerHeight * 0.8, window.innerWidth - 75);
  this.$node.css("transform", "scale(-1, 1)");
  //this.$node.mouseover(function() {this.jump()}.bind(this));
  this.$node.click(function() { 
    this.jump();  }.bind(this));
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

Mario.prototype = Object.create(Character.prototype);
Mario.prototype.constructor = Mario;

Mario.prototype.step = function() {
  Character.prototype.step.call(this);

  //this.left += 10;
  var move = function() {
    this.d *= -1;
    var movement = '+=' + this.d + 'px';
    var scale = 'scale(' + this.size + ',' + this.size + ')';
    var reverse = 'scale(-' + this.size + ',' + this.size + ')'; 
    this.$node.animate({left: movement}, this.timeBetweenSteps, function() {
      if (this.d < 0) {
        this.$node.css("transform", reverse);
      } else {
        this.$node.css("transform", scale);
      }
      var height = this.size === 2 ? 0.77 * window.innerHeight : 0.80 * window.innerHeight;
      this.setPosition(height);

    }.bind(this));
  };
  move.call(this);



  //this.$node.toggle();
};

Mario.prototype.jump = function() {
  var starth = parseInt(this.$node.css("top"), 10);
  /*var upf = function(character) {
    return function()
    return setPosition(this.setPosition(++starth)).call(character).bind(character);
  };
  var downf = function(character) {
    return setPosition(this.setPosition(--starth)).call(character).bind(character);
  };
  var up = upf(this);
  var down = downf(this);*/
  var up = function() {
    starth -= 6;
    this.setPosition(starth);
  }.bind(this);
  var down = function() {
    starth += 6;
    this.setPosition(starth);
  }.bind(this);
  for (var i = 0; i <= 500; i += 20) {
    setTimeout(up, i);
  }
  for (var i = 501; i <= 1001; i += 20) {
    setTimeout(down, i);
  }

  /*setTimeout(up, 100);
  setTimeout(up, 200);
  setTimeout(up, 300);
  setTimeout(up, 400);
  setTimeout(up, 500);
  setTimeout(down, 600);
  setTimeout(down, 700);
  setTimeout(down, 800);
  setTimeout(down, 900);
  setTimeout(down, 1000);*/

  /*Character.prototype.setPosition.call(this,this.top);
  var count = 0; 
  var height = 5; 
  while (count < height){
    this.top -= 1;
    count++; 
  }

  while (count >= 0){
    this.top += 1; 
    count--; 
  }*/
};





