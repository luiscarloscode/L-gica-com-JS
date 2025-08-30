/* Menor Número e Posição
Construa um algoritmo que receberá valores inteiros em quantidade suficiente para monta uma matriz 10x10. Ao final, o algoritmo escreverá o menor valor lido e os índices da linha e coluna em que se encontra esse valor.

A resposta de saída de seu algoritmo será no formato abaixo, onde n é o número encontrado e j e k são os índices de linha e coluna, respectivamente.

n está na linha j e coluna k */

let matriz = []

for (let i=0; i<10; i++){
    let linha = []
    for (let j=0; j<10; j++){
        linha.push(Math.floor(Math.random()*10))
    }
    matriz.push(linha)
}

console.log(matriz)

//verificar maior número

let MaiorNumero = [0, 0]

for (let linha=0; linha<10; linha++){
    for (let coluna=0; coluna<10; coluna++){
        if(matriz[linha][coluna] > matriz[MaiorNumero[0]][MaiorNumero[1]]){
            MaiorNumero = [linha, coluna]
        }
    }
}

console.log(`O maior número é ${matriz[MaiorNumero[0]][MaiorNumero[1]]} e está na linha ${MaiorNumero[0]} e coluna ${MaiorNumero[1]}`)