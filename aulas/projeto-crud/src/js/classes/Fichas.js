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
    updatePlayerById(id, player){
        const index = this.players.findIndex(currentPlayer => currentPlayer.id === id);
        this.players[index] = player
    }
    deletePlayerById(id){
        const index = this.players.findIndex(player => player.id == id)
        this.players.splice(index, 1);
    }
}