function invert(){
    let nomeNave = prompt("Digite o nome da nave: ")
    let nomeNaveInvertida = ""
    
    
    for( let i = nomeNave.length - 1; i >= 0; i--){
        if(nomeNave[i] == "e"){   
            break 
        }
        nomeNaveInvertida += nomeNave[i]
       
    }
    alert("Nome normal: " + nomeNave + "\nNome alterado: "+nomeNaveInvertida)
   
    
   

}