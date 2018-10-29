const messages = ['hi', 'it', 'is', 'me']

console.log(messages.includes('it'))

const objects = [{ name: 'krish' }, { name: 'mew' }]
console.log(objects.includes({ name: 'krish' }))

console.log(objects.includes(objects[0]))
