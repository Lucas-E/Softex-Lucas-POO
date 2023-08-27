import { Player } from "./classes/Player.js";
import { renderizaPlayers } from "./renderizaPlayers.js";

export function submitEditedData(e, antigoId, fichas) {
	const form = new FormData(e.target);
    const data = Object.fromEntries(form)
    console.log(data)
	const newPlayer = new Player(
		data.characterName,
		data.characterProfissao,
		data.characterForca,
		data.characterVida,
		data.characterMana,
		data.characterInteligencia,
		antigoId,
		data.characterDescricao
	);
    console.log('logando player', newPlayer)
	fichas.updatePlayerById(antigoId, newPlayer)
	renderizaPlayers(fichas);
}