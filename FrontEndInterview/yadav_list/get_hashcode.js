let s1 = "sample";

if (!String.prototype.getHashCode) {
  String.prototype.getHashCode = function () {
    console.log("String instance ", this);
    return this;
  };
}
