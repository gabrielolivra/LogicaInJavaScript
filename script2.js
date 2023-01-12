/*function piloto(){
    let nomPiloto = prompt("Digite seu nome: ")
    let VelocidadeInicial = 0
    let quest = confirm("Deseja acelerar a nave?")

    VelocidadeInicial = prompt("Insira a velocidade que quer aumentar: ")

    if( quest == true){
       
        if(VelocidadeInicial < 0){
            alert("Nave está parada. Considere partir e aumentar a velocidade")}
            else if(VelocidadeInicial < 40){
                alert("Você está devagar, podemos aumentar mais!")
                }
            else if(VelocidadeInicial >= 40 && VelocidadeInicial < 80){
                 alert("Parece uma boa velocidade para manter")
                }
            else if(VelocidadeInicial >= 80 && VelocidadeInicial < 100 ){
                alert("Velocidade alta, considere diminuir")
    
                }
                else if (VelocidadeInicial > 100){
                    alert("Velocidade perigosa")

                }
    }
    else{
        alert("Nave não acelerada")
    }

    alert("Piloto: "+nomPiloto + "\n\nVelocidade atual: " +VelocidadeInicial)

*/



/*function test(){

   let test = 2

   switch(test * 5){

    case 8:
        alert("Funciona")
        break
    case 10:
        alert("OK")
        break
    default:
        alert("Não encontrou")
        
   }
}*/

function anosLuz(){

  let distancia = prompt("Informe a distancia em anos-luz:")
  let lista = prompt("1. Parsec(pc) \n2. Unidade astronômica (AU) \n3. Quilômetros (km)")

  switch(lista){
    case "1":
        let calc1 = distancia * 0.306601
        alert(calc1)
        break
    case "2":
        let calc2 = distancia * 63241.1
        alert(calc2)
        break
    case "3":
        let calc3 = distancia * (9.5 * 10**12)
        alert(calc3)
        break
    default:
        alert("Fora de escopo")
        break
  }


}
