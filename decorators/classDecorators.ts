function Banana(message: string) {
  return function (target: Function) {
    target.prototype.banana = function (): void {
      console.log('CONSOLE', message);
    };
  };
}

@Banana('Bananas are yellow')
class FruitBasket1 {
  constructor() {}
}

const basket: any = new FruitBasket1();
basket.banana();
