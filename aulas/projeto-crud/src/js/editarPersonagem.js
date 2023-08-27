import { submitEditedData } from "./submitEditedData.js";


export function editarPersonagem(player, fichas) {
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
		submitEditedData(e, player.id, fichas);
	});
}
