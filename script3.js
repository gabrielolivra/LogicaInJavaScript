function dobras(){

    let dobra = 0
let nome = prompt("Qual o nome da sua nave?")
let quest = prompt("Deseja entrar em dobra espacial? \n1. Sim  \n2. Não")
while(quest == "1"){
     dobra += 1
     quest = prompt("Deseja realizar a proxima dobra? \n1. Sim  \n2. Não ")
}

alert("Nome da nave: "+nome + "\nQuantidade de dobras: "+ dobra)
}