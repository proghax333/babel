var _initProto, _call_a, _Foo;
const dec = () => {};
var _Foo_brand = /*#__PURE__*/new WeakSet();
class Foo {
  constructor() {
    babelHelpers.classPrivateMethodInitSpec(this, _Foo_brand);
    babelHelpers.defineProperty(this, "value", (_initProto(this), 1));
  }
  setA(v) {
    babelHelpers.classPrivateSetter(_Foo_brand, _call_a, this, v);
  }
}
_Foo = Foo;
[_call_a, _initProto] = babelHelpers.applyDecs2301(_Foo, [[dec, 4, "a", function (v) {
  return this.value = v;
}]], [], _ => _Foo_brand.has(babelHelpers.checkInRHS(_))).e;
