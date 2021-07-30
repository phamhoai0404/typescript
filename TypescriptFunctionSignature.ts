/**
 * FUNCTION SIGNATURE
 */


//Đây là kiểu chữ kí của greet nha
let greet : (a: string, b: string) => void;

greet = (name: string, greeting: string)=>{
    console.log(`name: ${name} greeting: ${greeting}`);
}
greet('Phạm Hoài', 'Xin chào tất cả mọi người');


//Tạo chữ kí tiếp 
let calculate : ( a: number, b: number, c?: string) => number;

//Cách này ghi rõ ràng hơn và dễ hiểu hơn này 
// calculate = (oneNumber: number, twoNumber: number, action: string = 'null')=>{
//     return action ==='add'? oneNumber +twoNumber: oneNumber - twoNumber;
// }
calculate = (oneNumber: number, twoNumber: number, action: string = 'null')=>
    action ==='add'? oneNumber +twoNumber: oneNumber - twoNumber;

console.log(" Tính toán : " + calculate(12,30));

    
