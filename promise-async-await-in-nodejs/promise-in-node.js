console.log("Program Start");

const loginSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login successfull");
    }, 2000);
});

const loginFailed = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Login failed"));
    }, 2000);
});

// If promise resolved
loginSuccess
.then(data => console.log(data))
.catch(error => console.log(error.message));

// If promise rejected
loginFailed
.then(data => console.log(data))
.catch(error => console.log(error.message));

Promise.all([loginSuccess, loginFailed])
.then(result => console.log(result))
.catch(error => console.log(error.message))

console.log("Program End");