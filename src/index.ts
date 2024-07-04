// console.log("I will comeback")

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

function printName(name: string) {
    return new Promise((resolve: Function, reject)=> {
        let time = Math.floor(Math.random()*5)*1000
        console.log(time);
        setTimeout(
            () => {
                console.log(name);
                resolve();
            },time)
    })
}

// printName("Thanh Hạ").then(()=> printName("Hào"))
// .then(()=> printName("Diệp"))
// .then(()=> printName("Nhi"))
// .catch((err)=> console.log(err))


// asyn / await : cấu trúc giúp promise đơn giản hơn 

const getAll = async () => {
    await printName("Hạ Vô tri")
    await printName("Hào")
    await printName("Diệp")
    await printName("Nhi")
    console.log("Finished")
}

getAll();