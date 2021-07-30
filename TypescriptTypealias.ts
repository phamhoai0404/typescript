/**
 * TYPE ALIAS
 */
//Đây là kiểu dữ liệu mình tự tạo ra thôi 
type StringorNumber = string | number;

//Student là kiểu dữ liệu không phải là đối tượng đâu 
//Đừng nhầm lẫn
type Student ={
    name : string;
    id : StringorNumber
}
//Thêm void vào để cho rõ ràng nhất nhá 
let studentDetail = ( id: StringorNumber , name: String ): void =>{
    console.log(`id : ${id} , name : ${name}`);
}
studentDetail(12,'Phạm Hoài ');
studentDetail('ABC234', 'Phạm Phương Anh');


let greet = ( user : Student): void =>{
    console.log(`Sinh viên có id: ${user.id} , name: ${user.name} `);
}

greet({id: '11111', name: 'Phạm Hoài'});
greet({id: 222, name: 'Phạm Hoài'});