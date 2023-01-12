let nomeNave = prompt("Digite o nome da sua nave: ")
let velocidadeInicial = 0


function loopNave() {

    let menu = prompt("1. Acelerar a nave em 5km/s \n2. Desacelerar em 5km/s \n3. Imprimir dados de bordo \n4. Sair do programa ")
    while (menu == "1") {
        velocidadeInicial += 5
        menu = prompt("Digite 1 para continuar e 2 para voltar ao menu")
        if (menu == 2) {
            return loopNave()
        }

    }
    while (menu == "2") {
        if (velocidadeInicial != 0 && velocidadeInicial > 0) {

            velocidadeInicial -= 5

            menu = prompt("Digite 1 para continuar e 2 para voltar ao menu")

            while (menu == "1") {

                menu = prompt("Digite 1 para continuar e 2 para voltar ao menu")
                velocidadeInicial -= 0

                if (menu == "2") {
                    return loopNave()
                }

            }
        }
        else {
            alert("Não foi possivel reduzir a velocidade")
            menu = prompt("Digite 1 para voltar ao menu")
            return loopNave()


        }
    }

    while (menu == "3") {
        alert("Nome da nave: " + nomeNave + "\nVelocidade: " + velocidadeInicial)
        return loopNave()
    }

    while (menu == "4") {
        break

    }

    while (menu != "4" && menu != "3" && menu != "2" && menu != "1") {
        return loopNave()


    }


}