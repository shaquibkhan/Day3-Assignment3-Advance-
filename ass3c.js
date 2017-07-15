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
var Animal = (function () {
    function Animal(name, behaviour, distance_covered) {
        this.name = name;
        this.behaviour = behaviour;
        this.distance_covered = distance_covered;
    }
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, behaviour, distance_covered) {
        return _super.call(this, name, behaviour, distance_covered) || this;
    }
    Tiger.prototype.tigerInfo = function () {
        console.log("Name of the animal is " + this.name + ", behaviour is " + this.behaviour + " & distance covered is " + this.distance_covered);
    };
    return Tiger;
}(Animal));
var first = new Tiger('tiger', 'carnivores', 25000);
first.tigerInfo();
var Cow = (function (_super) {
    __extends(Cow, _super);
    function Cow(name, behaviour, distance_covered) {
        return _super.call(this, name, behaviour, distance_covered) || this;
    }
    Cow.prototype.cowInfo = function () {
        console.log("Name of the animal is " + this.name + ", behaviour is " + this.behaviour + " & distance covered is " + this.distance_covered);
    };
    return Cow;
}(Animal));
var second = new Cow('cow', 'omninivores', 5000);
second.cowInfo();
