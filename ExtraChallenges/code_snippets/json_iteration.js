let data = [
  { winrate: '56.67' },
  [
    {
      bout: "Bout 5: Europe's  Qualifiers",
      wins: '2',
      role: 'Alternate'
    },
    {
      pokemon: 'Quagsire',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/195.png'
    },
    {
      pokemon: 'Venusaur',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/3.png'
    },
    {
      pokemon: 'Beedrill',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/15.png'
    },
    {
      pokemon: 'Mawile',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/303.png'
    },
    {
      pokemon: 'Escavalier',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/589.png'
    },
    {
      pokemon: 'Mandibuzz',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/630.png'
    }
  ],
  [
    {
      bout: "Bout 4: Europe's  Qualifiers",
      wins: '1',
      role: 'Alternate'
    },
    {
      pokemon: 'Quagsire',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/195.png'
    },
    {
      pokemon: 'Ninetales_alolan',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/ninetales-alola.png'
    },
    {
      pokemon: 'Beedrill',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/15.png'
    },
    {
      pokemon: 'Sealeo',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/364.png'
    },
    {
      pokemon: 'Jellicent',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/593.png'
    },
    {
      pokemon: 'Venusaur',
      sprite: 'https://thesilphroad.com/img/pokemon/icons/96x96/3.png'
    }
  ]
]
// console.log(data.slice(1))
const [details, ...bouts] = data;
bouts.map(([boutDetails, ...pokemons]) =>
   pokemons.map(({ pokemon, sprite }) => { console.log(sprite) }))