"use strict";
/**
 * CLASS
 */
exports.__esModule = true;
exports.Employees = void 0;
// Cách Hơi dài dòng quân tự một tí 
var Employee = /** @class */ (function () {
    function Employee(name, mmmm, age) {
        this.name = name;
        this.age = age;
        this.male = mmmm;
    }
    return Employee;
}());
var human = new Employee('hoa', true, 12);
console.log(human.name);
console.log(human.male);
// console.log(human.age); không thể truy cập được vì privte
human.name = 'Ngọc';
// human.male =false; không thể thiết lập được vì là readonly
// human.age =20;không thể thiết lập được vì private
console.log(human);
//Cách này có ý nghĩa y sì cái kia nhưng ngắn gọn hơn
var Employees = /** @class */ (function () {
    function Employees(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employees.prototype.print = function () {
        return "Name: " + this.name + " - Age: " + this.age + " - Male: " + this.male;
    };
    return Employees;
}());
exports.Employees = Employees;
//Test thử mà thôi
var aa = new Employees('hoa', 20, true);
var bb = new Employees('lan', 21, false);
var cccc = [];
cccc.push(aa);
cccc.push(bb);
cccc.forEach(function (eem) { return console.log(eem.print()); });
