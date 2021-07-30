// /**
//  * FUNCTION 
//  */

const square = (size : number)=> size * size ;

console.log( square(3));

let greet : Function;

greet = ()=> console.log("xinh gái quá cơ");

greet();

// Viết như này kiểu c là number hay string đều được
let add = (a : number, b: number, c: number |string )=>{
    console.log(a+b);
    console.log(c)
}
add(10,11,'hoai');

//c ?: number |string -----> là ? là có thể null; nếu không null thì  có thể thuộc kiểu dữ liệu number hay string đều được
let add = (a : number, b: number, c ?: number |string )=>{
    console.log(a+b);
    c? console.log(c) : console.log("rỗng nhá ");
}
add(10,11, 'Phạm Hoài nhá');
console.log("-----------------phân cách-----------");
add(10,11);



//Nếu nó mặc định  không truyền vào gì thì nó có mặc định có giá trị là 10;
let defaultFunciton = (a: number, b: number, c: number | string = 10) =>{
    console.log("Kết quả a+b = " + (a+b));
    console.log("- c là: " +c);
}

defaultFunciton(12,11);
console.log("-----------------Phân cách ----------------");
defaultFunciton(12,11,'Phạm Hoài');
console.log("-----------------Phân cách ----------------");
defaultFunciton(12,11,444);


//Viết như này cũng được
//let mus = (a : number, b: number) => a+b;
//Nhưng chuẩn kiểu của nó là phải
var mus = function (a, b) { return a + b; };
