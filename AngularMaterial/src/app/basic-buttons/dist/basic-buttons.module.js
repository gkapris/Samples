"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BasicButtonsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var basic_buttons_routing_module_1 = require("./basic-buttons-routing.module");
var buttons_component_1 = require("./buttons/buttons.component");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var button_toggle_1 = require("@angular/material/button-toggle");
var BasicButtonsModule = /** @class */ (function () {
    function BasicButtonsModule() {
    }
    BasicButtonsModule = __decorate([
        core_1.NgModule({
            declarations: [buttons_component_1.ButtonsComponent],
            imports: [
                common_1.CommonModule,
                basic_buttons_routing_module_1.BasicButtonsRoutingModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                button_toggle_1.MatButtonToggleModule,
            ]
        })
    ], BasicButtonsModule);
    return BasicButtonsModule;
}());
exports.BasicButtonsModule = BasicButtonsModule;
