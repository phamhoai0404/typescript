let names = ['Hoài', 'Hà', 'Thúy', 'Thư', 'Vẻ', 'Yến' ];

//Sẽ không push được vì mảng của nó thuộc kiểu String rồi 
//names.push(22222222);
//names.push(false);

//nó phải push đúng kiểu của mảng nó thì mới được
names.push('Huyền');
names[2] = 'uuuuuuuuuu';
console.log(names);

//Nếu mà khai báo đầu tiên là kiểu hỗn hợp thì sẽ được
let mix = [1, 2, 'Hoài', true];
mix.push(10);
mix.push('Huệ');
mix.push(true);
//mix.push({a: 10, b: 'Hoa'});push kiểu object lại không được nhá vì khai báo chỉ có kiểu number, string, boolean thôi

console.log(mix);


/**
 * Object
 */

 let person= {
    names: 'Hoài',
    age : 21,
    isStudent: true
}
//person.names = 20 không được như này nhá vì names thuộc kiểu string
//Tương tự như vậy cũng đối với age và isStudent
person.names = 'Phạm Hoài';
person.age = 10;
person.isStudent = true;
console.log(person);

//Hoặc là gắn bằng cả một đội có cùng thuộc tính luôn

person = {
    names: 'Phương Anh',
    age : 14,
    isStudent: true
    //kill: 'Good' --> Không thêm được như này vì trước lúc đầu person không có thuộc tính skill
}
console.log(person);

