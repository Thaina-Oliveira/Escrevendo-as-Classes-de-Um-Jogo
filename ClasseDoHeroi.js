class hero{
    ataque = "";

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "mago"){
            this.ataque = "magia";
        } else if(this.tipo === "guerreiro"){
            this.ataque = "espada";
        } else if(this.tipo === "monge"){
            this.ataque = "artes marciais";
        } else if(this.tipo === "ninja"){
            this.ataque = "shuriken";
        } else {
            this.tipo = "INVÁLIDO";
            this.ataque = "ATAQUE INVÁLIDO"
        }
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}  

do {
    let nome = "Thainá";
    let idade = 24;
    let tipo = "ninja";

    let heroi = new hero(nome, idade, tipo.toLowerCase());

    heroi.atacar()

    break;
} while(true)


