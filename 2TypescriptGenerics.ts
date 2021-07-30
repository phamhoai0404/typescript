/**
 * GENERICS
 */
//Kiểu như mình định nghĩa dữ liệu mình tạo ra thôi là kiểu array biết trước nó là number 
type arrayNumber = Array<number>;
type arrayString = Array<string>;

//biết truyền vào là một mảng có kiểu dữ liệu là string và trả về là một string
const array1 = (arr: Array<string>) => arr[arr.length-1];

//Không biết kiểu dữ liệu array truyền vào là kiểu dữ liệu gì và về dữ liệu gì
//Cách này không hay
const array2 = (arr: Array<any>) => arr[arr.length-1];
//---> Cách này hay hơn này
//Truyền vào kiểu T và sẽ trả về kiểu T .....(T) có thể thay thế bằng bất kì chữ gì nhá 
const array3 = <T>(arr: Array<T>) => arr[arr.length-1];
const array4 = <hhahaha>(arr: Array<hhahaha>) => arr[arr.length-1];

const data2 = array4<number>([12,12,33333,11]);//có thể viết kiểu này
const data = array4([12,12,33333,11]);//Viết kiểu này là ngắn gọn hơn này
console.log(data);




//Cũng tương tự như array bình thường vẫn được
const numbersssssss = <T>(x: T) =>x;//trả về đúng cái phần tử đó
const numbersssssss2 = <T>(x: T) =>[x];//trả về mảng phần tử có 1 phần tử đó 

//Lấy 2 ví dụ để thấy được sự khác biệt
console.log(numbersssssss(3));
console.log(numbersssssss2(3));

console.log(numbersssssss('hoa anh đào'));
console.log(numbersssssss2('hoa anh đào'));


///Truyền vào dữ liệu x thuộc kiểu dữ liệu X gì cũng được, y truyền vào kiểu dữ liệu Y  gì cũng được
//trả về dữ liệu một mảng có kiểu dữ liệu X, Y
const makeArrayXY = <X,Y>(x: X, y: Y) => [x,y];

//Ví dụ
const m1 = makeArrayXY('hoa','lan');
const m2= makeArrayXY(2,3);
const m3 = makeArrayXY(true, 2);

//Muốn cố định nó Tuple thì chri cần thêm cái này dữ liệu trả về bắt buộc theo lần lượt x: phải kiểu dữ liệu X, y phải kiểu dữ liệu Y
const makeArrayXYTupe = <X,Y>(x: X, y: Y): [X,Y] => [x,y];
const m7 = makeArrayXYTupe('hoa','lan');
const m8 = makeArrayXYTupe<string, number>('hoa',23);//Định nghĩa sẵn dữ liệu rồi thì phải truyền đúng kiểu đấy 

//Nếu mà Y không truyền vào  thì mặc định nó là kiểu number
const makeArrayXYTupe2 = <X,Y=number>(x: X, y: Y): [X,Y] => [x,y];
//const m10 = makeArrayXYTupe2<string>('hoa','lan');//--> Như vậy sẽ báo lỗi vì mặc định Y nếu không truyền vào nó sẽ thuộc kiểu number
const m9 = makeArrayXYTupe2('hoa',13);
const m10 = makeArrayXYTupe2<string | null> ('hoa',13);
const m11 = makeArrayXYTupe2<string | null> (null,13);//kiểu truyền vào của x có thể dữ liệu là X là string hoặc null vì mình đã khai báo rồi


