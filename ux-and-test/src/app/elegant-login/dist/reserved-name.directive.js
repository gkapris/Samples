"use strict";
exports.__esModule = true;
exports.ReservedNameValidator = void 0;
var heroes = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Ironman' },
    { id: 4, name: 'Superman' },
    { id: 5, name: 'Hulk' },
    { id: 6, name: 'Flash' },
    { id: 7, name: 'Vision' },
];
function ReservedNameValidator() {
    return function (control) {
        var reserved = heroes.find(function (hero) { return hero.name === control.value; });
        return reserved ? { reservedName: true } : null;
    };
}
exports.ReservedNameValidator = ReservedNameValidator;
