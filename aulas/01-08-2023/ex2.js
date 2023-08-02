class Animal{
    falar(){
        console.log('animal faz som')
    }
}

class Cachorro extends Animal{
    falar(){
        console.log('cachorro faz auau')
    }
}

class Gato extends Animal{
    falar(){
        console.log('gato faz miau')
    }
}

class Peixe extends Animal{
    falar(){
        console.log('peixe faz os cara vieram aqui com um submarino com um controle de videogame, eu sabia que ia dar errado')
    }
}

const cachorro1 = new Cachorro()
const gato1 = new Gato()
const peixe1 = new Peixe()

peixe1.falar()