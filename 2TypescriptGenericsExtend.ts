/**
 * GENERICS EXTENDS 
 */
//Kiểu trả về kiểu đối tượng nhưng nó sẽ kêu gào lên vì là any nha
//Sai nha 
// const  makeFullName = obj =>({

//     ...obj,
//     fullName : `${obj.fistName} ${obj.lastName}`
//} )



//Truyền vào kiểu đối tượng có 2 thuộc tính là fistName, lastName 
//và trả về kiểu đối tượng gồm các thuộc tính của obj và thêm thuộc tính fullName
const  makeFullName = (obj: {fistName: string, lastName: number})=>({
    ...obj,
    fullName: `${obj.fistName} ${obj.lastName}`
});
const  makeFullName2 = (obj: {k: string, h: number})=>(obj);
const k = makeFullName2({k:'phạm hoài',h: 21});
const kk = makeFullName({fistName:'phạm hoài',lastName: 21});
console.log(k);
console.log(kk);




//Nếu mình thêm cái age vào thì nó sẽ kêu gào lên từ đó mới xem cái dưới nhá hhaha
//kk = makeFullName({fistName:'phạm phương anh',lastName: 14, age: 10});
//
const  makeFullNameConstrainWithGenerics = <T extends {firstName: string, lastName: string}>
(obj: T) =>({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})
//từ h mình sẽ thêm thoải mái thuộc tính nha;
const kkss = makeFullNameConstrainWithGenerics({firstName:'phạm phương anh',lastName: '14', age: 10, isStudent: true});
console.log(kkss);




//888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888
const addNewEmployee = (person: Object) =>{
    let id =  Math.floor(Math.random() *100);
    return ({
        ...person,
        id
    })
}

const personOne = addNewEmployee({firstName: 'Phạm Hoài', age: 21});
console.log(personOne);
//Nhưng mà khi truy cập nó không biết thuộc tính là gì mà truy cập
personOne.id = 10;
//personOne.firstName ='Phạm Lan'; Không truy cập được vì nó không hiểu 
//BÂY H THẤY ĐƯỢC SỰ LỢI HẠI CỦA CỦA GENERICS

const addNewEmployeeGenerics = <TT extends Object> (person: TT) =>{
    let id =  Math.floor(Math.random() *100);
    return ({
        ...person,
        id
    })
}
//-> Bây h thì truy cập bình thường thôi
const personTwo = addNewEmployeeGenerics({firstName: 'Phạm Phương Anh', age: 14, isStudent: true});
console.log(personTwo);
personTwo.id = 10000;
personTwo.firstName ='Phạm Đức Huy';//Thấy sự lợi hại của nó chưa nó truy cập được kìa còn ở trên thì không truy câp được
