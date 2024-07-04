"use strict";
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
const numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, (element, index, arr) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: [${arr}]`);
});
