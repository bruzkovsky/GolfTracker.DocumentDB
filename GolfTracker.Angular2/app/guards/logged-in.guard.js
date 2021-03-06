"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../services/auth.service');
var LoggedInGuard = (function () {
    function LoggedInGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        // return this._auth.isLoggedIn();
        if (this._auth.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this._auth.redirectUrl = state.url;
        // Navigate to the login page
        this._router.navigate(['/login']);
        return false;
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=logged-in.guard.js.map