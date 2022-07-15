import CardGame from '../CardGame';
import '../CardFrontBack/style.css';
function CardFrontBack() {
  return /*html*/ `
    <article class='card-front-back'>
    ${CardGame()}
    ${CardGame(
      './images/logo-javascript.png',
      'Logo JavaScript',
      'card-front-back'
    )}
    </article>

  `;
}
export default CardFrontBack;
