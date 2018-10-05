// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

<<<<<<< HEAD
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
=======
function destructivelyAppendKitten(array, name) {
  array.push(name)
  return array
}

>>>>>>> a3efdadaa68d15313df68225d78272e0ce8dbed8
