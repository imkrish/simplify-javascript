const krish = {
  name: 'krish',
  age: 27,
  food: ['rice', 'fish'],
  gf: {
    name: 'Mew',
  },
}

// console.log(deepClone)

const test = {
  name: 'test',
  age: 15,
}

console.log({ ...krish, ...test })
console.log(krish)

const deepClone = {
  ...krish,
  gf: { ...krish.gf },
}
