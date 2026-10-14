let restaurant = {
  naam: "Nam Fong",
  keuken: "Chinees",
  menu: [
    { naam: "Peking Duck", prijs: 20 },
    { naam: "Dim Sum", prijs: 15 },
    { naam: "Gebakken rijst", prijs: 13 },
  ],
  toevoegenAanMenu(item, prijs) {
    this.menu.push({ item, prijs });
  },
};

console.log(restaurant.menu);

restaurant.toevoegenAanMenu("test", 123);

console.log(restaurant.menu);

process.exit();
