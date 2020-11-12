"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewHeroFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var reserved_name_directive_1 = require("./reserved-name.directive");
var NewHeroFormComponent = /** @class */ (function () {
    function NewHeroFormComponent() {
        this.heroDetails = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, reserved_name_directive_1.ReservedNameValidator()]),
            realName: new forms_1.FormControl(''),
            biometricData: new forms_1.FormGroup({
                age: new forms_1.FormControl(''),
                eyes: new forms_1.FormControl(''),
                hair: new forms_1.FormControl('')
            }),
            powers: new forms_1.FormArray([])
        });
    }
    NewHeroFormComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(NewHeroFormComponent.prototype, "powers", {
        get: function () {
            return this.heroDetails.controls.powers;
        },
        enumerable: false,
        configurable: true
    });
    NewHeroFormComponent.prototype.addPower = function () {
        this.powers.push(new forms_1.FormControl(''));
    };
    NewHeroFormComponent = __decorate([
        core_1.Component({
            selector: 'app-new-hero-form',
            templateUrl: './new-hero-form.component.html',
            styleUrls: ['./new-hero-form.component.css']
        })
    ], NewHeroFormComponent);
    return NewHeroFormComponent;
}());
exports.NewHeroFormComponent = NewHeroFormComponent;
