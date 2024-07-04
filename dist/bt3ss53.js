"use strict";
const processArray = (arrInt, callbackFn) => {
    // Duyệt mảng
    let i = 0; // biến lặp
    const processElement = () => {
        // vị trí trong mảng hay không, nếu là vị trí trong mảng thì in ra giá trị tại vị trí i
        // in ra từng phần tử
        if (i < arrInt.length)
            callbackFn(arrInt[i]);
        i++;
        setTimeout(processElement, 1000);
    };
    processElement();
};
processArray([1, 2, 3, 4, 5], (a) => {
    console.log(a);
});
