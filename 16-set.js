const colors = ['black', 'red', 'green', 'red', 'black']

const set = new Set(colors)
console.log(set)

const uniqueColors = [...set]
console.log(uniqueColors)

set.add('test')
console.log(set)
