function onClick(inputName) {
  $.get(
    "https://pokeapi.co/api/v2/pokemon/" + inputName,
    function (data, status) {
      // document.getElementById("output").innerHTML = JSON.stringify(data);
      console.log(data);
      document.getElementById("name").innerHTML = data.name
      console.log(data.sprites.other["official-artwork"].front_default);
    }
  );
}

function oldOnclick(inputName) {
  const sum = add(0.04, 3.1);
  const war = "I am constantly at war with the bunnies!";
  const repeatuppercase = inputName.repeat(9999).toUpperCase();
  const name = "john";
  let age = 11;
  age = 13141516171819202122232425262728293031323334;
  document.getElementById("output").innerHTML =
    "The answer is: " + sum + "........... ";
  Add("I dont now wat im doin");
  age = Add();
}

function Add() {
  return 1 + 1;
}

function Add(parameter) {
  alert("This, answer, is, not - correct");
}

function add(a, bunnies) {
  return a + bunnies;
}
