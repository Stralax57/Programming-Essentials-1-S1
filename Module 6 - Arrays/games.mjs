let games = ['LoL', 'WoT']
games.push('Fortnite');
games.push('CSGO');
console.log(games.pop());
games[0] = 'Starcraft';

console.log(games)
process.exit();