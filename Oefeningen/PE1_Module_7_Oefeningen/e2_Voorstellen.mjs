function checkIsSpeels(value) {
  if (value === true) {
    return " speels.";
  } else {
    return " niet speels.";
  }
}

let hond1 = {
  naam: "Spencer",
  leeftijd: 2,
  isSpeels: true,
  stelVoor() {
    return (
      `Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} en ik ben` +
      checkIsSpeels(this.isSpeels)
    );
  },
};

let hond2 = {
  naam: "Yellow",
  leeftijd: 5,
  isSpeels: false,
  stelVoor() {
    return (
      `Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} en ik ben` +
      checkIsSpeels(this.isSpeels)
    );
  },
};

let honden = [hond1, hond2];

console.log(hond1.stelVoor());
