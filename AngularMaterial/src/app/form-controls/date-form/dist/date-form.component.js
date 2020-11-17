"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DateFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DateFormComponent = /** @class */ (function () {
    function DateFormComponent() {
        this.datePick = new forms_1.FormControl(Date.now(), forms_1.Validators.required);
    }
    DateFormComponent.prototype.ngOnInit = function () { };
    DateFormComponent.prototype.onLoad = function () {
        console.log(this.datePick.value);
    };
    DateFormComponent = __decorate([
        core_1.Component({
            selector: 'app-date-form',
            templateUrl: './date-form.component.html',
            styleUrls: ['./date-form.component.css']
        })
    ], DateFormComponent);
    return DateFormComponent;
}());
exports.DateFormComponent = DateFormComponent;
