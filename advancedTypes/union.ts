interface Hero3 {
  name: string;
  powers: number[] | Record<string, number>;
}

const hero1: Hero3 = {
  name: "Super Punch",
  powers: 10,
};

const hero2: Hero3 = {
  name: "Sonic Blast",
  powers: {
    ATK: 10,
    SPD: 20,
  },
};

console.log(hero1, hero2);
