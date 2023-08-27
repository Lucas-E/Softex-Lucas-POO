import { Fichas } from "./classes/Fichas.js";
import { renderizaPlayers } from "./renderizaPlayers.js";
import { Player } from "./classes/Player.js";

function submitPersonagem(event) {
	event.preventDefault();
	const dados = new FormData(event.target);
	const data = Object.fromEntries(dados);
	console.log(data);
	const newPlayer = new Player(
		data.characterName,
		data.characterProfissao,
		data.characterForca,
		data.characterVida,
		data.characterMana,
		data.characterInteligencia,
		id,
		data.characterDescricao
	);
	fichas.setPlayer(newPlayer);
	id = id + 1;
	renderizaPlayers(fichas);
	return false;
}

var id = 0;
export var fichas = new Fichas();
const submitCharacterForm = document.getElementById("formPersonagem");
submitCharacterForm.addEventListener("submit", submitPersonagem);
