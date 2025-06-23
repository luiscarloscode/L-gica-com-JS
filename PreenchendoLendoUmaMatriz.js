const matriz = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [0,1,2,3,4],
    [5,6,7,8,9],
    [0,1,2,3,4]
]
for (let i= 0; i< matriz.length; i++){
    let linha = ""
    for (let j = 0; j< matriz[i].length; j++){
        linha += `[${matriz[i][j]}]`
    }
    console.log(linha)
}
console.log("")

for (let i = matriz.length - 1; i >= 0; i--){
    let linha = ""
    for (let j = matriz[i].length -1; j >= 0; j--){
        linha += `[${matriz[i][j]}]`
    }
    console.log(linha)
}