import CardGame from '../CardGame';
import '../CardFrontBack/style.css';
function CardFrontBack() {
  window.cardFrontBack = {};

  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    $cardFrontBack.classList.toggle('-active');

    /*
    if ($cardFrontBack.classList.contains('-active')) {
      $cardFrontBack.classList.remove('-active');
    } else {
      
    }
    */
  };

  return /*html*/ `
    <article class='card-front-back' onclick='cardFrontBack.handleClick(event)'>
   <div class='card front'>
        ${CardGame()}
   </div>
   <div class='card -back'>
        ${CardGame('./images/logo-javascript.png', 'Logo JavaScript')}
    </div>
    </article>

  `;
}
export default CardFrontBack;
