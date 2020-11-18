"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TablesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var tables_routing_module_1 = require("./tables-routing.module");
var main_component_1 = require("./main/main.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var data_service_1 = require("../data/data.service");
var http_1 = require("@angular/common/http");
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            declarations: [main_component_1.MainComponent],
            imports: [
                common_1.CommonModule,
                tables_routing_module_1.TablesRoutingModule,
                table_1.MatTableModule,
                sort_1.MatSortModule,
                paginator_1.MatPaginatorModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(data_service_1.DataService),
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
