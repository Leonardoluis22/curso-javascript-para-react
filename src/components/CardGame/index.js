import "./style.css";

function CardGame(qtd) {
    let cardgames;
    for (let i = 1; i <= qtd; i++) {
        cardgames += `
        <article class="card-game">
            <img src="images/alura-pixel.svg" alt="logo da alura cursos">
        </article>
    `;
    }
    return cardgames;
}

export default CardGame;
