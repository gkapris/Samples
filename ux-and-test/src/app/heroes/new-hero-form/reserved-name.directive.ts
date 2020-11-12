import { ValidatorFn, AbstractControl } from '@angular/forms';

const heroes = [
  { id: 1, name: 'Thor' },
  { id: 2, name: 'Batman' },
  { id: 3, name: 'Ironman' },
  { id: 4, name: 'Superman' },
  { id: 5, name: 'Hulk' },
  { id: 6, name: 'Flash' },
  { id: 7, name: 'Vision' },
];

export function ReservedNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const reserved = heroes.find((hero) => hero.name === control.value);
    return reserved ? { reservedName: true } : null;
  };
}
