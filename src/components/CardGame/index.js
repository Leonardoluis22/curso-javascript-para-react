//jsx
import './style.css'; //importanto o arquivo css desse componente

function CardGame(
  icon = './images/alura-pixel.png',
  alt = 'Logo-Alura',
  classCard = 'card-game'
) {
  return /*html*/ `
      <article class='${classCard}' alt='${alt}'>
          <img src='${icon}'/>
      </article>
    `;
}
export default CardGame;
