"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fibonaccil = (n) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
        if (n <= 0) {
            reject(new Error(`${n} không thoải mãn yêu cầu phải > 0`));
        }
        else {
            if (n <= 2) {
                resolve(1);
            }
            else {
                resolve(fibo(n));
            }
        }
    });
});
const fibo = (n) => {
    if (n <= 2) {
        return 1;
    }
    else {
        return (fibo(n - 1) + fibo(n - 2)); // hàm đệ qui
    }
};
fibonaccil(10).then((result) => {
    console.log("Số fibonacci thứ 10 là : " + result);
}).catch(err => console.log(err));
