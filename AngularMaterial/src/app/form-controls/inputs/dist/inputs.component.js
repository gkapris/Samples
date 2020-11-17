"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputsComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var model_1 = require("../model");
var operators_1 = require("rxjs/operators");
var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.items = model_1.itemsList;
    }
    InputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredList$ = this.name.valueChanges.pipe(operators_1.map(function (name) { return _this.items.filter(function (item) { return item.name.startsWith(name); }); }));
    };
    InputsComponent = __decorate([
        core_1.Component({
            selector: 'app-inputs',
            templateUrl: './inputs.component.html',
            styleUrls: ['./inputs.component.css']
        })
    ], InputsComponent);
    return InputsComponent;
}());
exports.InputsComponent = InputsComponent;
