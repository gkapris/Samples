interface Hero1 {
  name: string;
  power: number;
}

const heropart: Partial<Hero1> = {
  name: 'Hulk',
};

console.log(heropart);
