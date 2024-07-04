"use strict";
function sortArrayWithPromise(array) {
    return new Promise((resolve) => {
        resolve(array.sort((a, b) => a - b));
    });
}
sortArrayWithPromise([1, 7, 2, 5, 9, 5]).then(sortedArray => {
    console.log(sortedArray);
});
