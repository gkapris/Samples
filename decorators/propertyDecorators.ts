function Jedi(target: Object, key: string) {
  let propertyValue: string = target[key];
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: function () {
        return propertyValue;
      },
      set: function (newValue) {
        propertyValue = newValue;
        console.log(`${propertyValue} is a Jedi`);
      },
    });
  }
}

class Character {
  @Jedi
  name: string;
}

const character = new Character();
character.name = "Luke";
