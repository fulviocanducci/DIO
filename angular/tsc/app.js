"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(id, name) {
        this.id = id;
        this.name = name;
    }
    return Pessoa;
}());
var p = new Pessoa(1, "Fulvio");
console.log(p);
