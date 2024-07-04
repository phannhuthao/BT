function countDown(n: number): Promise<void> {
    return new Promise((resolve, reject) => {
        if (n <= 0) {
            reject(new Error("Số nhập vào phải số dương."));
            return;
        }

        const intervalId = setInterval(() => {
            console.log(n);
            n--;

            if (n === 0) {
                clearInterval(intervalId);
                console.log("Hoàn thành quá trình đếm");
                resolve();
            }
        }, 1000);
    });
}

countDown(10)
