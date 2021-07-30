/**
 * ANY TYPES
 * là kiểu nào cũng được ấy không bắt buộc 
 */
let age: any = 25; console.log(age);
//bất kì kiểu dữ liệu nào gán cho age đều được
age = 'Phạm Hoài'; console.log(age);
age = {
    a: "EEEE",
    b: 12
}
console.log(age);




let person: {
    name: any,
    age: any
}
person = {
    name: "Phạm Hoài ",
    age: 20
}
