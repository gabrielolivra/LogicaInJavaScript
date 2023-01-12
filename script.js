function idade() {
 const nomPessoaVelha = prompt("Digite o nome da pessoa mais velha: ")
 const IdadePessoaVelha = prompt("Digite a idade da pessoa mais velha: ")
 const NomPessoaNova = prompt("Digite o nome da pessoa mais nova: ")
 const IdadePessoaNova = prompt("Digite a idade da pessoa mais nova: ")
 const CalcDiferencaIdade = IdadePessoaVelha - IdadePessoaNova
 alert("Nome da pessoa mais velha: "+nomPessoaVelha + "\nIdade pessoa mais velha"+ IdadePessoaVelha )
 alert("Nome da pessoa mais nova: "+NomPessoaNova + "\nIdade pessoa mais nova: "+ IdadePessoaNova)
 alert("A diferença entre as duas idades é de: "+ CalcDiferencaIdade +"anos")


}