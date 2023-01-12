/*function hitchedSpaceships(){


    let spaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]
    for(i=0; i< spaceships.length; i++){
      let passageiros = spaceships[i][1]
      if(passageiros > 9){
        let upperSpaceships = spaceships[i][0].toUpperCase()
        spaceships[i][0] = upperSpaceships
        let teste = spaceships[i][0]
         
       alert("Nome: "+ teste.join(">"))
       
      
      }
     
    }
        


}*/

function hitchedSpaceship(){
    let hitchedSpaceships = [
    ["Fenix", 8, true], 
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
let passageiros = hitchedSpaceships.filter(spaceship =>{
    return spaceship[1]> 9
}).map(spaceship => {
    return spaceship[0]
})

let engate = hitchedSpaceships.findIndex(spaceship =>{
    return spaceship[2] == false
})

let upperPassageiros = hitchedSpaceships.map(spaceship =>{
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mias de 9 tripulantes: "+ passageiros.join(", ")
message += "\n\nPlataforma com processo de engate: " + (engate+1)
message+= "\n\nEspaçonaves destacadas: "+ upperPassageiros.join(", ")

alert(message)
}