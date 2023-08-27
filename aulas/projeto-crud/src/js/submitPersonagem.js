import { Fichas } from "./classes/Fichas.js";
import { Player } from "./classes/Player.js";

function renderizaPlayers() {
	const fichasElement = document.getElementById("fichas");
	fichasElement.innerHTML = "";

	for (let player of fichas.players) {
		const templating = `
        <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${player?.nome ? player.nome : "No name"}</h5>
          <h6 class="card-subtitle mb-2 mt-2 text-muted">id ${player.id}</h6>
          <p class="card-text">${player.descricao}</p>
          <button class="btn btn-danger" id="character${player.id}">apagar</button>
          <button class="btn btn-danger">editar</button>
          <button class="btn btn-danger">ver</button>
        </div>
      </div>
        `;
		const wrapper = document.createElement("div");
		wrapper.innerHTML = templating;
		fichasElement.appendChild(wrapper);


        let deletarButton = document.getElementById(`character${player.id}`);
        deletarButton.addEventListener('click', (e) => {
            deletarPersonagem(player.id)
        })
	}
}

function deletarPersonagem(id) {
	fichas.deletePlayerById(id);
	renderizaPlayers();
}

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
	renderizaPlayers();
	return false;
}
var id = 0;
var fichas = new Fichas();
const submitCharacterForm = document.getElementById("formPersonagem");
submitCharacterForm.addEventListener("submit", submitPersonagem);
