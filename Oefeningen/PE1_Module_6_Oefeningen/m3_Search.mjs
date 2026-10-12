let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];

function searchNamen(lijst, naam) {
  for (let i = 0; i < lijst.length; i++) {
    if (namen[i] == naam) {
      return i;}
  }
  return -1
}

console.log(searchNamen(namen, "Mehdi"));

process.exit();
