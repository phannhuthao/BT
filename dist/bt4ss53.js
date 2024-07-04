"use strict";
const displayNumbers = (callBackFn, delay) => {
    let number = 1;
    const intervalId = setInterval(() => {
        callBackFn(number);
        number += 1;
    }, delay);
};
const showNumber = (num) => {
    console.log(num);
};
displayNumbers(showNumber, 1000);
