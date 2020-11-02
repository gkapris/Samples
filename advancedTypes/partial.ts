interface Hero1 {
  name: string;
  power: number;
}

const hero: Partial<Hero1> = {
  name: "Hulk",
};

console.log(hero);
