const fibonaccil = async (n: number)=> {

    return await new Promise((resolve, reject)=> {
        if(n<=0) {
            reject(new Error(`${n} không thoải mãn yêu cầu phải > 0`))
        } else {
            if(n<=2) {
                resolve(1);
            } else {
                resolve(fibo(n));
            }
        }
    })
}

const fibo =(n: number) :number=> {
        if(n<=2) {
            return 1;
        } else {
            return(fibo(n-1) + fibo(n-2)); // hàm đệ qui
        }
    }

fibonaccil(10).then((result)=> {
    console.log("Số fibonacci thứ 10 là : " + result);
}).catch(err=>console.log(err))    