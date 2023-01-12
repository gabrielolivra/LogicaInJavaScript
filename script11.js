/*class persona {
    constructor(nome, cidade, idade){
      this.nome = nome
      this.cidade = cidade
      this.idade = idade
      
    }
  }
  
  let nome = prompt("digite um nome")
  let cidade = prompt("Digite sua cidade")
  let idade = prompt("Digite sua idade")
  let pessoa = new persona(nome, cidade, idade)
  alert("Nome: "+pessoa.nome +"\nCidade: "+ pessoa.cidade +"\nIdade: "+
   pessoa.idade)

   console.log(pessoa)*/


class spaceship{
    constructor(nome, quantity, engatada, portas){
        this.nome = nome
        this.quantity = quantity
        this.engatada = engatada
        this.portas = portas

    }

}

function navesScript(){
   
    let nome = prompt("Digite o nome da nave: ")
    let quantity = prompt("Digite a quantidade de tripulantes: ")
    let engatada = prompt("A nave está engatada: \n1 - Sim\n 2 - Não")
    let portas = null
    let newArmazenamento = ''

    if(engatada == "1"){
        engatada = true
         portas = true
    }
    else{
        engatada = false
         portas = false
    }
var armazenamento = new spaceship(nome, quantity, engatada, portas)

let recadastro = prompt("Deseja cadastrar uma nova nave? \n1 - Sim\n 2 - Não")

if(recadastro == "1"){
    while(recadastro =="1"){
    armazenamento += newArmazenamento
        return navesScript()
    }
   
    
}
var final = [
    armazenamento.nome,
    armazenamento.quantity,
    armazenamento.engatada,
    armazenamento.portas]

console.log(newArmazenamento)

}

