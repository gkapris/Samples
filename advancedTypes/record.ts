interface Hero2 {
  powers: Record<string, number>;
  resistance: Record<string, number>;
}

const herorec: Hero2 = {
  powers: {
    speed: 10,
    strength: 5,
  },
  resistance: {
    toughness: 20,
    fireResistance: 5,
  },
};

console.log(herorec);
