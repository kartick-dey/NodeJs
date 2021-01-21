console.log("Program Start");

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ email: email });
        }, 2000)
    })
};

const fetchPhoneNo = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ phone: 8170990726 });
            // reject(new Error("faild to fetch phone number"))
        }, 2000)
    });
};

const useAsyncAwait = async () => {
    try {
        const email = await login("kd@kd.com", 135845);
        const phone = await fetchPhoneNo(email.email);
        console.log(phone);
    } catch (error) {
        console.log(error.message)
    }
};

useAsyncAwait();

console.log("Program End");