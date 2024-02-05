const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First operation completed");
    }, 1000);
});

const promise2 = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${result} => Second operation completed`);
        }, 2000);
    });
};

const promise3 = (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${result} => Third operation completed`);
        }, 3000);
    });
};

promise1
    .then((result1) => promise2(result1))
    .then((result2) => promise3(result2))
    .then((finalResult) => {
        console.log(finalResult);
        // Handle the final result
    })
    .catch((error) => {
        console.error(error);
        // Handle errors if any step fails
    });
