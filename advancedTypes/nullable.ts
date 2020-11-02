interface Hero4 {
  powers: number[] | null | undefined;
}

const hero: Hero4 = {
  powers: [10, 20],
};

if (hero.powers !== null && hero.powers !== undefined) {
  for (let i = 0; i < hero.powers.length; i++) {
    const element = hero.powers[i];
    console.log(element);
  }
}