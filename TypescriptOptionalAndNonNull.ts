/** OPTIONAL  AND NON NULL  */

//Đây là bình thường
const add = ( a: number, b: number) => a+b;
console.log( "- Tổng là: " + add(12,11));

//Như b! kiểu như là tao hứa chắc chắn tao sẽ truyền vào dữ liệu của b kiểu như vậy á 
// const adds =( a: number, b?: number) => a+b!
// console.log("- Tổng hai là: "+ adds(12,11));

//Nếu như tồn tại b thì kết ủa addss bằng tổng của a và b nếu không tồn tại b thì kết quả addss sẽ bằng a
const addss =( a: number, b?: number) => b? a+b : a;
console.log("- Tổng hai là: "+ addss(12));
console.log("- Tổng hai là: "+ addss(12,11));
