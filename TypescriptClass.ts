/**
 * CLASS
 */

// Cách Hơi dài dòng quân tự một tí 
class Employee{
    public name: string;//có thể truy cập từ bên ngoài và thay đổi giá trị của nó
    private age: number;//không thể truy cập từ bên ngoài cũng như ko thay đổi được giá trị của nó
    readonly male: boolean;//đọc truy cập từ giá trị bên ngoài nhưng không thể thay đổi giá trị của nó

    constructor( name: string, mmmm: boolean, age: number){
        this.name = name;
        this.age = age;
        this.male = mmmm;
    }

}
const human = new Employee('hoa',true, 12);
console.log(human.name);
console.log(human.male);
// console.log(human.age); không thể truy cập được vì privte

human.name = 'Ngọc';
// human.male =false; không thể thiết lập được vì là readonly
// human.age =20;không thể thiết lập được vì private
console.log(human);

//Cách này có ý nghĩa y sì cái kia nhưng ngắn gọn hơn
export class Employees{
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ){}
    print(){
        return `Name: ${this.name} - Age: ${this.age} - Male: ${this.male}`;
    }
}
//Test thử mà thôi
const aa = new Employees('hoa',  20 , true);
const bb = new Employees('lan',  21 , false);

const cccc: Employees[] = [];

cccc.push(aa);
cccc.push(bb);

cccc.forEach( eem => console.log( eem.print()));