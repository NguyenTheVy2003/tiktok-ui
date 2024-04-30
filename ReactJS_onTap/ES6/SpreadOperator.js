// var array1 = ['Js', 'PHP', 'Ruby'];
// var array2 = ['ReactJS', 'React Native'];
// var array3 = [...array2, ...array1];

// console.log(array3);

// var obj1 = {
//     name: "Nguyễn Thế Vỹ"
// }
// var obj2 = {
//     age: 21
// }

// var obj3 = {
//     ...obj1,
//     ...obj2,
// }
// console.log(obj3);


// var defaultConfig = {
//     api: 'https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html',
//     apiVersion: 'v1',
//     other: 'other',
// }

// var exConfig = {
//     ...defaultConfig,
//     api: 'http://www.24hne'
// }

// console.log(exConfig);



var array = ['PHP', 'JS', 'Ruby', 'ReactJS'];

//rest trong trường hợp này là spread
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
console.log(...array);