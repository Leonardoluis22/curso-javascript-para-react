import "./src/styles/settings/colors.css";
import "./src/styles/generic/generic.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
