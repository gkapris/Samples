function Log(target: Function, key: string, parameterIndex: number) {
  const functionLogged = key || target.prototype.constructor.name;
  console.log(
    `The parameter in position ${parameterIndex} at ${functionLogged} has been decoded`
  );
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
    this.greeting = phrase;
  }
}
