const filters = new Map()
filters.set('breed', 'labrador')
filters.set('krish', 'handsome').set('mew', 'gf')
filters.get('krish')
filters.delete('krish')
filters.set('krish', 'yo')

console.log(filters)

const objects = {
  krish: 'handsome',
  mew: 'gf',
}

const keyValuePairs = Object.entries(objects)
console.log(keyValuePairs)

const map = new Map(keyValuePairs)
console.log(map)
