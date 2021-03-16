//boucle qui compte jusqua 100
// on teste la divisibilité par 15, si oui print fizzbuzz
// on teste la divisibilité par 3, si oui print fizz
// on teste la divisibilité par 5, si oui print buzz

function fizzbuzz(nombre) {
  if (Number.isInteger(nombre)){
    if (nombre % 15 === 0) {
      return "fizzbuzz"
    } else if (nombre % 5 === 0) {
      return "buzz";
    } else if (nombre % 3 === 0) {
      return "fizz";
    }
    return nombre.toString();
  } else {
    return "input error";
  }
}

function main() {
  let i = 0;
  while (i <= 100) {
    console.log(fizzbuzz(i));
    i++;
 }
}

main();

module.exports = fizzbuzz;
