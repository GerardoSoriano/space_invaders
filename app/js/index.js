$(document).ready(function(){
  var container = $("div#Starfield").get(0);
  var starfield = new Starfield();
  starfield.init(container);
  starfield.start();
})
