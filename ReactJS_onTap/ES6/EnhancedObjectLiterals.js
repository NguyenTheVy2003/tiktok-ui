
var name = 'Nguyễn Thế Vỹ';
var age = 21;

const user = {
    // định nghĩa key và value cho object
    name,
    age,


    // định nghĩa key cho object dưới dạng biến
    getName() {
        return name;
    }
};

console.log(user.getName());


// Định nghĩa method cho object
var fieldName = 'JavaScrip';
var fieldPrice = 'Price';

const course = {
    [fieldName]: 'JavaScrip',
    [fieldPrice]: 1000,
}

console.log(course);