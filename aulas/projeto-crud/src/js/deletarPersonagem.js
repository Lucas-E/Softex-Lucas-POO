import { renderizaPlayers } from "./renderizaPlayers.js";

export function deletarPersonagem(id, fichas) {
	fichas.deletePlayerById(id);
	renderizaPlayers(fichas);
}