import Spaceship from './classes/spaceship.js';
import enums from './utilities/keyboard.js';

let spaceship;
let usWidth, esWidth;
let sLeftPoint, sRightPoint;
$(document).ready(function(){
  //creamos la nave y le seteamos una velocidad
  spaceship = new Spaceship();
  spaceship.setVelFactor(5)
  //obtenemos el width del user-
  usWidth = $("div.user-space").width();
  //aqui desarrollaremos toda la logica automata
  setInterval(function(){
    //$("div.alien").css("transform","translate("+ xPosition +"px,0px)");
    //xPosition+=velFactor;
  },5);
}).keydown(function(e){
  switch (e.which) {
    case enums.keyboard.LEFT_ARROW:
      //obtenemos nuestro punto mas a la izquierda
      sLeftPoint = spaceship.getXPosition() - (spaceship.getEl().width() / 2);
      //comprobamos si nuestra posición actual mas el factor, no se sale
      if ((sLeftPoint-spaceship.getVelFactor())>-(usWidth/2)) {
          spaceship.setPosition(spaceship.getXPosition()-spaceship.getVelFactor(),spaceship.getYPosition());
      }
      break;
    case enums.keyboard.UP_ARROW:
      break;
    case enums.keyboard.RIGHT_ARROW:
      //obtenemos nuestro punto mas a la derecha
      sRightPoint = spaceship.getXPosition() + (spaceship.getEl().width() / 2);
      //comprobamos si nuestra posición actual mas el factor, no se sale
      if ((sRightPoint+spaceship.getVelFactor())<(usWidth/2)) {
          spaceship.setPosition(spaceship.getXPosition()+spaceship.getVelFactor(),spaceship.getYPosition());
      }
      break;
    case enums.keyboard.DOWN_ARROW:
      break;
    default: return;
  }
  spaceship.update();
});

$(window).resize(function(){
  //al reescalarse la ventana, volvemos a obtener el width
  usWidth = $("div.user-space").width();
  //nos aseguramos que la nave nunca se salga del contenedor
  //para ello obtenemos ambos puntos
  sLeftPoint = ship.getXPosition() - (ship.getEl().width() / 2);
  sRightPoint = ship.getXPosition() + (ship.getEl().width() / 2);
});
