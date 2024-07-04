"use strict";
const showPrintName = (name, delay, callback) => {
    setTimeout(() => {
        console.log(name);
        callback();
    }, delay);
};
const task1 = (callback) => {
    showPrintName("task1", 1000, callback);
};
const task2 = (callback) => {
    showPrintName("task2", 1500, callback);
};
const task3 = (callback) => {
    showPrintName("task3", 2000, callback);
};
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Xong");
        });
    });
});
