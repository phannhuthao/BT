const processArray = (arrInt: number[], callbackFn: Function) => {
    // Duyệt mảng
    let i = 0; // biến lặp
    const processElement = () => { // hàm processElement , kieemr tra xem i có phải là 1 
        // vị trí trong mảng hay không, nếu là vị trí trong mảng thì in ra giá trị tại vị trí i
        // in ra từng phần tử
        if(i < arrInt.length)
            callbackFn(arrInt[i])
        i++
        setTimeout(processElement,1000);
    }
    processElement();
} 



processArray([1,2,3,4,5], (a: number)=>{
    console.log(a);
})

