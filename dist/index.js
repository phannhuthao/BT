"use strict";
// console.log("I will comeback")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // hàm in ra tên 
// const printName = (name: string, callback: Function) => {
//     // in ra sau 1 khoảng thời ngẫu nhiên 1 đến 5 giây
//     let randomTime =Math.random()*5+1;
//     setTimeout(() => {
//         console.log(name);
//         callback()
//     },randomTime*1000)
// }
// // gọi hàm
// // printName("Hạ");
// // printName("Hào");
// // printName("Diệp");
// printName("Hạ", () => {
//     printName("Hào", () => {
//         printName("Diệp", ()=> {
//             console.log("Finished!!!")
//         })
//     })
// }
// )
//đây là một ví dụ bất đồng bộ
// xử lí bất đồng bộ có 3 cách xử lí bất đồng bộ:
// C1: CallBack
// C2: Async / Await
// C3: 
//Session 54
// Tạo promise
// let promise = new Promise((resolve: Function, reject: Function) => {
//     resolve("Phan Nhựt Hào"); // là một hàm bất đồng bộ 
//     console.log("Tạo Promise");
//     // reject("Nguyễn Thanh Hạ") // là một hàm bất đồng bộ
// });
// // Sử dụng promise
// promise.then((name)=> {
//     console.log("name:" + name);
//     console.log("Thành công");
// }).then(()=>{
//     console.log("Tiếp tục")
// })
// .catch(err=>{
//     console.log(err);
// })
// console.log("Kết thúc rồi")
// in ra các tên sau 1 thời gian ngẫu nhiên
function printName(name) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5) * 1000;
        console.log(time);
        setTimeout(() => {
            console.log(name);
            resolve();
        }, time);
    });
}
// printName("Thanh Hạ").then(()=> printName("Hào"))
// .then(()=> printName("Diệp"))
// .then(()=> printName("Nhi"))
// .catch((err)=> console.log(err))
// asyn / await : cấu trúc giúp promise đơn giản hơn 
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield printName("Hạ Vô tri");
    yield printName("Hào");
    yield printName("Diệp");
    yield printName("Nhi");
    console.log("Finished");
});
getAll();
