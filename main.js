import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import PlayerScore from "./src/components/PlayerScore";
import BoardGame from "./src/components/BoardGame/index.js";

const $root = document.querySelector("#root");

const $htmlCardGame = CardGame(1);
const $htmlPlayerScore = PlayerScore();
const $htmlBoardGame = BoardGame();

//$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
