"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Invoice.prototype.print = function () {
        console.log(this.name + " - " + this.age + " - " + this.male);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(huhu, donha, malesss) {
        this.huhu = huhu;
        this.donha = donha;
        this.malesss = malesss;
    }
    Payment.prototype.print = function () {
        console.log(this.huhu + " - " + this.donha + " - " + this.malesss);
    };
    return Payment;
}());
exports.Payment = Payment;
