
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
			deletarPersonagem(player.id);
		});

		let readButton = document.getElementById(`ler${player.id}`);
		readButton.addEventListener("click", (e) => {
			lerDadosPersonagem(player);
		});

		let editButton = document.getElementById(`editar${player.id}`);
		editButton.addEventListener("click", (e) => {
			editarPersonagem(player);
		});
	}
}

function deletarPersonagem(id) {
	fichas.deletePlayerById(id);
	renderizaPlayers();
}

function lerDadosPersonagem(player) {
	const dadosTemplate = `
        <div class="d-flex flex-column">
            <span><h2>Nome: </h2> ${player.nome} </span>
            <span><h2>Profissão: </h2> ${player.profissao} </span>
            <span><h2>Força: </h2> ${player.forca} </span>
            <span><h2>Vida: </h2> ${player.vida} </span>
            <span><h2>Mana: </h2> ${player.mana} </span>
            <span><h2>Inteligência: </h2> ${player.inteligencia} </span>
            <span><h2>Descrição: </h2> ${player.descricao} </span>
        </div>
    `;

	const modalVisualizacao = document.getElementById("verPersonagemBody");
	modalVisualizacao.innerHTML = dadosTemplate;
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

function editarPersonagem(player) {
	const template = `
    <form id="editPersonagemForm">
        <div class="mb-3">
            <label for="characterName" class="form-label"
                >Nome do personagem</label
            >
            <input
                type="text"
                class="form-control"
                id="characterName"
                name="characterName"
                value="${player.nome}"
            />
        </div>
        <div class="mb-3">
            <label
                for="characterProfissao"
                class="form-label"
                >Profissao</label
            >
            <input
                type="text"
                class="form-control"
                id="characterProfissao"
                aria-describedby="emailHelp"
                name="characterProfissao"
                value="${player.profissao}"
            />
        </div>
        <div class="mb-3">
            <label for="characterForca" class="form-label"
                >Força</label
            >
            <input
                type="text"
                class="form-control"
                id="characterForca"
                name="characterForca"
                value="${player.forca}"
            />
        </div>
        <div class="mb-3">
            <label for="characterVida" class="form-label"
                >Vida</label
            >
            <input
                type="text"
                class="form-control"
                id="characterVida"
                name="characterVida"
                value="${player.vida}"
            />
        </div>
        <div class="mb-3">
            <label for="characterMana" class="form-label"
                >mana</label
            >
            <input
                type="text"
                class="form-control"
                id="characterMana"
                name="characterMana"
                value="${player.mana}"
            />
        </div>
        <div class="mb-3">
            <label
                for="characterInteligencia"
                class="form-label"
                >Inteligencia</label
            >
            <input
                type="text"
                class="form-control"
                id="characterInteligencia"
                name="characterInteligencia"
                value="${player.inteligencia}"
            />
        </div>
        <div class="mb-3">
            <label
                for="characterDescricao"
                class="form-label"
                >Descrição do personagem</label
            >
            <input
                type="text"
                class="form-control"
                id="characterDescricao"
                name="characterDescricao"
                value="${player.descricao}"
            />
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn btn-primary">
                Save changes
            </button>
        </div>
    </form>
    `;

	let editarBody = document.getElementById("editarPersonagemBody");
	editarBody.innerHTML = template;

	let editForm = document.getElementById("editPersonagemForm");
	editForm.addEventListener("submit", (e) => {
		e.preventDefault();
		submitEditedData(e, player.id);
	});
}

function submitEditedData(e, antigoId) {
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
	fichas.updatePlayerById(id, newPlayer)
	renderizaPlayers();
}

var id = 0;
var fichas = new Fichas();
const submitCharacterForm = document.getElementById("formPersonagem");
submitCharacterForm.addEventListener("submit", submitPersonagem);
