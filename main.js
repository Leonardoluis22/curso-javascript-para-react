//Importes---------------------------------
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import CardGame from './src/components/CardGame';
import PlayerScore from './src/components/PlayerScore';
import BoardGame from './src/objects/BordGame';

//------------------------------------------------

const $root = document.querySelector('#root');
const $htmlCardGames = BoardGame(6);
$root.insertAdjacentHTML('afterend', $htmlCardGames);

/*função que adicona o evento de troca nos cards
let cards = document.querySelectorAll('.card-game');
cards.forEach((element) => {
  element.addEventListener('click', function () {
    this.classList.add('card-gameV');
    this.classList.remove('card-game');
    element.querySelector('img').src = '/images/logo-html.png';
  });
});
*/
