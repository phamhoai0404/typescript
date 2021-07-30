interface Person{
    name: string,
    age: number,
    speek (language: string ): void,
    spend (amount: number): number
}
const human: Person = {
    name: 'Phạm Lan',
    age: 21,
    speek(huhu: string){
        console.log("đó nha: "+ huhu);
    },
    // speek(huhu: 'vietnamhhha');===> viết kiểu như vầy là sai nha 
    spend(so: number){
        return so;
    }
}

///Test cái gì nữa huhuhu

let testHuhu = (onePerson: Person )=>{
    console.log(`name: ${onePerson.name} - age: ${onePerson.age}`);
}
testHuhu(human);



// ------------------------------Đây là interface cái khác nhá 
import { Invoice, Payment } from './classImplementOfInterface';
import { hasPrint } from './Interface';



const hahaOne: hasPrint = new Invoice('Phạm Hoài', 20, 'false');
const hahaTwo: hasPrint = new Payment('Phạm Hoài', 20, true );

const arrayHasPrint: hasPrint[] = [];

arrayHasPrint.push(hahaOne);
arrayHasPrint.push(hahaTwo);
console.log(arrayHasPrint);

