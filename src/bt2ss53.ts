// Viết một hàm delayedCallBack() nhận tham số truyền vào

// là một callback function và một số nguyên thể hiện thời gian delay (mili giây)

// Hàm delayedCallback() sẽ gọi callBack function sau một khoảng thời gian nhất định

const delayedCallBack = (callBackFn: Function, int: number) => {
    // int là thời gian delay (milis)
    setTimeout(() => {
        callBackFn(); // gọi hàm callback sau khoảng thời gian milis
    }, int);
}

const printNumber = () => {
    let num = Math.random()*1000
    console.log(num);
}

delayedCallBack(printNumber, 3000);