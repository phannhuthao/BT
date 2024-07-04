function myForEach(array: any, callback: Function) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (element: any, index: any, arr: any) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: [${arr}]`);
});
