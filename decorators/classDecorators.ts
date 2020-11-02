function Banana(message: string) {
  return function (target: Function) {
    target.prototype.banana = function (): void {
      console.log(message);
    };
  };
}

@Banana("Bananas are yellow")
class FruitBasket {
  constructor() {}
}

const basket: any = new FruitBasket();
basket.banana();
