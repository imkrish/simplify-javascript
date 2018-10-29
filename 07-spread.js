const arr = ['a', 'b', 'c']
console.log(arr)
console.log(...arr)

const removeItemV1 = (items, removable) => {
  const newItems = []
  for (let idx = 0; idx < items.lemgth; i++) {
    const item = items[idx]
    if (item !== removable) {
      newItems.push(item)
    }
  }
}

const removeItemV2 = (items, removable) => {
  const index = items.indexOf(removable)
  //   splice will mutate original array
  items.splice(index, 1)
  return items
}

const removeItemV3 = (items, removable) => {
  const index = items.indexOf(removable)
  return items.slice(0, index).concat(items.slice(index + 1))
}

const removeItemV4 = (items, removable) => {
  const index = items.indexOf(removable)
  return [...items.slice(0, index), ...items.slice(index + 1)]
}
