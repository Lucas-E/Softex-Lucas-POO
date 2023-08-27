import { deletarPersonagem } from "./deletarPersonagem.js";
import { lerDadosPersonagem } from "./lerDadosPersonagem.js";
import { editarPersonagem } from "./editarPersonagem.js";

export function renderizaPlayers(fichas) {
	const fichasElement = document.getElementById("fichas");
	fichasElement.innerHTML = "";

	for (let player of fichas.players) {
		const templating = `
        <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${player?.nome ? player.nome : "No name"}</h5>
          <h6 class="card-subtitle mb-2 mt-2 text-muted">id ${player.id}</h6>
          <p class="card-text">${player.descricao}</p>
          <button class="btn btn-danger" id="character${
				player.id
			}">apagar</button>
          <button class="btn btn-danger" id="editar${
				player.id
			}" data-bs-toggle="modal"
          data-bs-target="#editarFichaModal">editar</button>
          <button class="btn btn-danger" id="ler${
				player.id
			}" data-bs-toggle="modal"
          data-bs-target="#lerFichaModal">ver</button>
        </div>
      </div>
        `;
		const wrapper = document.createElement("div");
		wrapper.innerHTML = templating;
		fichasElement.appendChild(wrapper);

		let deletarButton = document.getElementById(`character${player.id}`);
		deletarButton.addEventListener("click", (e) => {
			deletarPersonagem(player.id, fichas);
		});

		let readButton = document.getElementById(`ler${player.id}`);
		readButton.addEventListener("click", (e) => {
			lerDadosPersonagem(player);
		});

		let editButton = document.getElementById(`editar${player.id}`);
		editButton.addEventListener("click", (e) => {
			editarPersonagem(player, fichas);
		});
	}
}