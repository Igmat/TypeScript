//// [superCallBeforeThisAccessing2.ts]
class Base {
    constructor(c) { }
}
class D extends Base {
    private _t;
    constructor() {
        super(() => { this._t }); // no error. only check when this is directly accessing in constructor
    }
}


//// [superCallBeforeThisAccessing2.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(c) {
    }
    return Base;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super.call(this, function () { _this._t; }) || this;
        return _this;
    }
    return D;
}(Base));
