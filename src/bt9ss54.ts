function sortArrayWithPromise(array: any) {
    return new Promise((resolve) => {
        resolve(array.sort((a: number, b: number) => a - b));
    });
}

sortArrayWithPromise([1, 7, 2, 5, 9, 5]).then(sortedArray => {
    console.log(sortedArray); 
});
