/**
 * EXPLICIT TYPES
 */
 let myName : string = 'Phạm Hoài';
 let age : number;
 let isStudent: boolean;
 //console.log(myName);
 
 
 //id là thuộc kiểu string hoặc là kiểu number 
 let id: string | number;
 
 //Kiểu này cũng được nhưng muốn rõ ràng thì cần
 //let arrayssss = ['Lan', 'Ngọc', 'Trang'];
 let arrayssss : string[] = ['Lan', 'Ngọc', 'Trang'];
 
 //Mixed mảng này thành phần thì có thể là String, number, boolean
 let mixed : (string|number| boolean)[] = ['Lan', 'Ngọc', 'Trang',];
 mixed.push(10);
 console.log(mixed);
 
 
 console.log(arrayssss);
 
 
 //Nghĩa là hoppy thì chỉ ở trong coding, sleepping hoặc eatting mà thôi
 let hoppy : 'coding' | 'sleepping' | 'eatting';
 //hoppy = 'going';--> như này sẽ báo lỗi 
 hoppy = 'coding';
 console.log(hoppy);
 
 
 let Student:{
     name : string,
     age : number,
     isGood: boolean
 }