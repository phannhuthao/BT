const displayNumbers = (callBackFn: (num: number) => void, delay: number) => {
    let number = 1;
    const intervalId = setInterval(() => {
        callBackFn(number);
        number += 1;
    }, delay);
};

const showNumber = (num: number) => {
    console.log(num);
};
displayNumbers(showNumber, 1000);
