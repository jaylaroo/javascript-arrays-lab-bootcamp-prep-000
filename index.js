const app = "I don't do much."

var array = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return array + array.push(name);
}