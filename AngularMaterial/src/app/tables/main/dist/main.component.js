"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var MainComponent = /** @class */ (function () {
    function MainComponent(service) {
        this.service = service;
        this.dataSource = new table_1.MatTableDataSource();
        this.columnNames = ['id', 'name'];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.dataSource = new table_1.MatTableDataSource(data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], MainComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], MainComponent.prototype, "paginator");
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
