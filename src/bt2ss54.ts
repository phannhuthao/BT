const divideNumbers = (a: any, b: any): number | void => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Phải nhập a và b là số");
    }
    if (b === 0) {
        throw new Error("Không thể chia cho số 0. Kết thúc hàm divideNumbers");
    }
    const result = a / b;
    console.log(`Thương của 2 số a và b là: ${result}`);
    return result;
}

try {
    divideNumbers(4, 2);
    divideNumbers(2, 0);  
} catch (error: any) {
    console.error(error.message);
}

try {
    divideNumbers('ab', 3); 
} catch (error: any) {
    console.error(error.message);
}