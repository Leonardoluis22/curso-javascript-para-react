//Importes---------------------------------
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BordGame';

//------------------------------------------------

const $root = document.querySelector('#root');
//$root.insertAdjacentHTML('afterbegin', $htmlPlayerName);
$root.insertAdjacentHTML(
  'afterend',
  `
  ${ScoreBoard}
  ${BoardGame(6)}
  
`
);

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
