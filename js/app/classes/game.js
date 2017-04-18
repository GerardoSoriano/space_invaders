import Spaceship from 'spaceship.js';
import enums from '../utilities/keyboard.js';
class GameHelper {
  //variables globales.
  let spaceship;

  constructor() {
    //inicializamos clases.
    spaceship = new Spaceship();

    //iniciamos parametros de clase.
    spaceship.SetVelFactor(5);
  }

  function DetectInput(e){
    switch (e.which) {
      case expression:

        break;
      default:

    }
  }
  function Update(){

  }
  function Render(){

  }
}

export default GameHelper;
