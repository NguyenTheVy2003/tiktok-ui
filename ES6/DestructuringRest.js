var array = ['Js', 'PHP', 'Ruby'];

var [...rest] = array

console.log(rest);

var user = {
    name: 'Nguyễn Thế Vỹ',
    age: 21,
    infor: {
        name: 'vyne',
    }
}

var { name, infor: { name: inforName } } = user;
console.log(name);
console.log(inforName);


function logger(...params) {
    console.log(params);
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8))