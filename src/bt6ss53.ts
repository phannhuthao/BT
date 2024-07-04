const showPrintName = (name: string, delay: number, callback: () => void) => {
    setTimeout(() => {
        console.log(name);
        callback();
    }, delay);
};

const task1 = (callback: () => void) => {
    showPrintName("task1", 1000, callback);
};

const task2 = (callback: () => void) => {
    showPrintName("task2", 1500, callback);
};

const task3 = (callback: () => void) => {
    showPrintName("task3", 2000, callback);
};

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Xong");
        });
    });
});
