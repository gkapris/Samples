"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormControlsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_controls_routing_module_1 = require("./form-controls-routing.module");
var inputs_component_1 = require("./inputs/inputs.component");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var date_form_component_1 = require("./date-form/date-form.component");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var FormControlsModule = /** @class */ (function () {
    function FormControlsModule() {
    }
    FormControlsModule = __decorate([
        core_1.NgModule({
            declarations: [inputs_component_1.InputsComponent, date_form_component_1.DateFormComponent],
            imports: [
                common_1.CommonModule,
                form_controls_routing_module_1.FormControlsRoutingModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
            ]
        })
    ], FormControlsModule);
    return FormControlsModule;
}());
exports.FormControlsModule = FormControlsModule;
