$(document).ready(function(){
  var container = $('div#Starfield').get(0);
  var starfield = new Starfield();
  starfield.init(container);
  starfield.start();

  var canvas = $('canvas#GameCanvas').get(0);
  canvas.width = 800;
  canvas.height = 600;

  var game = new Game();
  game.init(canvas);
  game.start();

  $(window).keydown(function(e){
    var keycode = e.which;
    game.keydown(keycode);
  });
  $(window).keyup(function(e){
    var keycode = e.which;
    game.keyup(keycode);
  });
});
