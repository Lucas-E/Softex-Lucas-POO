export class Player {
	constructor(nome, profissao, forca, vida, mana, inteligencia, id) {
        this.id = id;
		this.nome = nome;
		this.profissao = profissao;
		this.forca = forca;
		this.vida = vida;
		this.mana = mana;
		this.inteligencia = inteligencia;
	}

	//getters

	getNome() {
		return this.nome;
	}
	getProfissao() {
		return this.profissao;
	}
	getForca() {
		return this.forca;
	}
	getVida() {
		return this.vida;
	}
	getMana() {
		return this.mana;
	}
	getInteligencia() {
		return this.inteligencia;
	}

	//setters

	setNome(nome) {
		this.nome = nome;
	}
	setProfissao() {
		this.profissao = profissao;
	}
	setForca(forca) {
		this.forca = forca;
	}
	setVida(vida) {
		this.vida = vida;
	}
	setMana(mana) {
		this.mana = mana;
	}
	setInteligencia(inteligencia) {
		this.inteligencia = inteligencia;
	}
}
