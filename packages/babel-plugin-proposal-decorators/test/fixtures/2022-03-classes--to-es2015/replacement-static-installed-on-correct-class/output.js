var _initClass, _x, _A, _Class_brand, _B, _temp;
const dec = () => {};
let hasX, hasA, hasM;
let _Foo;
new (_x = /*#__PURE__*/new WeakMap(), _A = /*#__PURE__*/new WeakMap(), _Class_brand = /*#__PURE__*/new WeakSet(), _B = /*#__PURE__*/new WeakMap(), (_temp = class extends babelHelpers.identity {
  constructor() {
    (super(_Foo), babelHelpers.classPrivateMethodInitSpec(this, _Class_brand), babelHelpers.classPrivateFieldInitSpec(this, _x, void 0), babelHelpers.classPrivateFieldInitSpec(this, _A, void 0), babelHelpers.defineProperty(this, "x", void 0), babelHelpers.classPrivateFieldInitSpec(this, _B, void 0), this), (() => {
      hasX = o => _x.has(babelHelpers.checkInRHS(o));
      hasA = o => _Class_brand.has(babelHelpers.checkInRHS(o));
      hasM = o => _Class_brand.has(babelHelpers.checkInRHS(o));
    })(), _initClass();
  }
}, (_Foo2 => {
  class Foo {
    static get a() {
      return babelHelpers.classPrivateFieldGet2(_B, this);
    }
    static set a(v) {
      babelHelpers.classPrivateFieldSet2(_B, this, v);
    }
    static m() {}
  }
  _Foo2 = Foo;
  [_Foo, _initClass] = babelHelpers.applyDecs2203R(_Foo2, [], [dec]).c;
})(), _temp))();
function _get_a(_this) {
  return babelHelpers.classPrivateFieldGet2(_A, _this);
}
function _set_a(_this2, v) {
  babelHelpers.classPrivateFieldSet2(_A, _this2, v);
}
function _m() {}
