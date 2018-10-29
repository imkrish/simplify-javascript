const testVar = () => {
  var x = 5

  if (x === 5) {
    var x = 3
  }

  return x
}

console.log(testVar())
