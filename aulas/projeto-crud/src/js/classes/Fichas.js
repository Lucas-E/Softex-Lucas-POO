export class Fichas{
    constructor(){
        this.players = [];
    }

    setPlayer(player){
        this.players.push(player);
    }
    getAllPlayers(){
        return this.players
    }
    getPlayerById(id){
        const player = players.find(currentPlayer => currentPlayer.id === id)
        return player;
    }
    updatePlayerById(id, nome, profissao, forca, vida, mana, inteligencia){
        const player = players.find(currentPlayer => currentPlayer.id === id);
        player.setNome(nome);
        player.setProfissao(profissao)
        player.setForca(forca)
        player.setVida(vida);
        player.setMana(mana);
        player.setInteligencia(inteligencia);
    }
    deletePlayerById(id){
        const index = this.players.findIndex(player => player.id == id)
        this.players.splice(index, 1);
    }
}