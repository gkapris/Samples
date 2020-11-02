function Log() {
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const oldMethod = descriptor.value;
    descriptor.value = function newFunc(...args: any[]) {
      let result = oldMethod.apply(this, args);
      console.log(
        `${propertyKey} is called with ${args.join(",")} and result ${result}`
      );
      return result;
    };
  };
}
class Hero {
  @Log()
  attack(...args: []) {
    return args.join();
  }
}
const hero = new Hero();
hero.attack();
