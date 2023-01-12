function objt(){

let nomeNave = prompt("Insira o nome da nave: ")
let tipoNave = prompt("Insira o tipo da nave: ")
let velocidadeMaxNave = prompt("Insira a velocidade maxima da nave: ")
let acelerar = prompt("Deseja acelerar a nave? \n 1. Sim \n 2. Não")
let velocidade = 0

while(acelerar == "1"){
let aceleracao = prompt("Digite a velocidade q deseja acelerar: ")
aceleracao = parseFloat(aceleracao)
velocidade = aceleracao + velocidade

alert(velocidade)
if(velocidade > velocidadeMaxNave){
    alert("Velocidade max ultrapassada")
    break
}

}
let objetoNave = {
    Nave: nomeNave,
    Tipo: tipoNave,
    velocidadeMaxima: velocidadeMaxNave,
    velocidadeFInal: velocidade,
}

console.log(objetoNave)
}

/*
let spaceship = {

velocity: 0,
speedUp: function(acceleration){
    this.velocity += acceleration
}
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = number(prompt("Informe a velocidade maxima da nave: "))

}

function acelerate(){

    let acceleration = Number(prompt("Quanto você quer acelerar?"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MAXIMA ULTRAPASSADA!" + "\n Velocidade da nave: " + spaceship.velocity + "km/s" + "\n Velocidade maxima da nave: " + spaceship.maxVelocity + "km/s")

    }
}

function stop(){
    alert("Nome: "+ spaceship.nome + "\n Tipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\n Maxima da nave: "spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu(){
    let chosenOption
    do{
        chosenOption = prompt("Voce deseja: \n1. Acelerar \n2. Parar")
        switch(chosenOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção invalida")        
        }
    } while(chosenOption != "2")
}
registerSpaceship()
showMenu()
*/