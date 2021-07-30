/**
 * GENERICS IN INTERFACE
 */
interface Resouce<T>{
    name: string,
    age: number,
    data: T
}
//T có thể là kiểu dữ liệu truyền vào bất kì ví dụ như string, number, mảng, object, kiểu type
const resouseOne: Resouce<string> = {
    name :'Phạm Lan',
    age: 12,
    data:'Hải Dương'
}
const resouseTwo: Resouce<object> = {
    name :'Phạm Lan',
    age: 12,
    data:{address: 'Hải Dương', isStudent: true }
}

type StringOrNumber = string | number;
const resouseThree: Resouce<StringOrNumber> = {
    name :'Phạm Lan',
    age: 12,
    data:11111111111111
}
console.log(resouseThree.data + " ---- " +resouseThree.name +" -----"+resouseThree.age);


//Hoặc có thể viết là kiểu type 
type NumberResource = Resouce<number[]>
const personFour : NumberResource = {
    name :'Phạm Lan',
    age: 12,
    data: [12,12,23,2222]
}
console.log(personFour);
//Hết rồi hay sao á 