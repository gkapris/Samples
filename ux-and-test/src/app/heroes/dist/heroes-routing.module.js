"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var hero_list_component_1 = require("./hero-list/hero-list.component");
var auth_guard_1 = require("../auth/auth.guard");
var confirm_guard_1 = require("../auth/confirm.guard");
var hero_detail_resolver_service_1 = require("./hero-detail-resolver.service");
var routes = [
    {
        path: 'heroes',
        component: hero_list_component_1.HeroListComponent
    },
    {
        path: 'heroes/:id',
        component: hero_detail_component_1.HeroDetailComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canDeactivate: [confirm_guard_1.ConfirmGuard],
        resolve: { hero: hero_detail_resolver_service_1.HeroDetailResolverService }
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];
var HeroesRoutingModule = /** @class */ (function () {
    function HeroesRoutingModule() {
    }
    HeroesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HeroesRoutingModule);
    return HeroesRoutingModule;
}());
exports.HeroesRoutingModule = HeroesRoutingModule;
