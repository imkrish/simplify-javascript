const map = new Map()

map.clear()
map
  .set('sky', 'blue')
  .set('forest', 'green')
  .set('night', 'dark')
  .set('sun', 'orange')
map.get('sky')
map.delete('sky')

const results = [...map]
  .sort((a, b) => (a[0] > b[0] ? 1 : -1))
  .map(([key, value]) => `${key}: ${value}`)
  .join(', ')

console.log(results)
