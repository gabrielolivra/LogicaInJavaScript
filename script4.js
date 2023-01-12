function newNome(){

let nomeSpace = prompt("Digite o nome da nave: ")
let substituir = prompt("Qual caracter deseja substituir? ")
let qualSubtituir = prompt("Por qual deseja substituir? ")
let newNome = ""

for(i = 0; i < nomeSpace.length; i++){
    if(nomeSpace[i] == substituir){
        newNome += qualSubtituir       
    }

    else {
       newNome += nomeSpace[i]
    }
    
}

alert(newNome)


}