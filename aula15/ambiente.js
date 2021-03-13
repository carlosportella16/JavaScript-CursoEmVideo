let num = [5, 8, 2, 9, 3]
num.push(1) // insere valor 1 na ultima posição
num.sort() // Organiza na ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`) // Número de posições existentes
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostrando o valor na posição zero
let pos = num.indexOf(8) // Posição onde está localizado valor 8
console.log(`O valor 8 está na posição ${pos}.`)
pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`) // posição = -1, pois não existe o valor 4 no vetor
