const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens];
  moreKittens.push(name);
  return moreKittens;
  
}

function prependKitten(name) {
  var moreKittens = [...kittens];
  moreKittens.unshift(name);
  return moreKittens;
  
}