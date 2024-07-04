"use strict";
const checkCondition = (condition, callback) => {
    setTimeout(() => {
        console.log(`Điều kiện trả về: ${condition}`);
        callback(condition);
    }, 1000);
};
// Hàm callback để in ra kết quả
const display = (result) => {
    console.log(`Kết quả kiểm tra: ${result}`);
};
// Kiểm tra điều kiện với true và false
checkCondition(true, display);
checkCondition(false, display);
