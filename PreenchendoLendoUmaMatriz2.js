const matriz = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [0,1,2,3,4],
    [5,6,7,8,9],
    [0,1,2,3,4]
]

for (let i = 0; i < matriz.length; i++){
    let linha = ""
    for (let j = 0; j < matriz[i].length; j++){
        linha += `[${matriz[i][j]}]`
    }
    console.log(linha)
}

 console.log("")

 let somaString = ""
 for (let i = 0; i < matriz[0].length; i++){
    let linha = ""
    let soma = 0
    for (let j = 0; j < matriz.length; j++){
        linha += `[${matriz[j][i]}]`
        soma += matriz[i][j]
    }
    somaString += soma + " "
    console.log(linha)
 }

console.log("")
console.log(somaString)