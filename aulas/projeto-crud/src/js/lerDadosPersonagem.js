export function lerDadosPersonagem(player) {
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
