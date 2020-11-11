"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroDetailComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, heroService) {
        this.route = route;
        this.heroService = heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHeroObs();
    };
    HeroDetailComponent.prototype.getHeroObs = function () {
        var _this = this;
        this.route.paramMap
            .pipe(operators_1.switchMap(function (params) {
            var id = +params.get('id');
            return _this.heroService.getHero(id);
        }), operators_1.map(function (hero) { return (_this.hero = hero); }))
            .subscribe();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-detail',
            templateUrl: './hero-detail.component.html',
            styleUrls: ['./hero-detail.component.css']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
