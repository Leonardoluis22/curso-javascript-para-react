import CardGame from '../CardGame';
import '../CardFrontBack/style.css';
function CardFrontBack() {
  return /*html*/ `
    <article class='card-front-back'>
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
