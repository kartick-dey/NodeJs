const async = require('async');

const funcStackArray = [];

const functionOne = (callback) => {
    console.log("From functionOne");
    callback(null, "First function result");
    // callback("Error", null);
};
const functionTwo = (callback) => {
    console.log("From functionTwo");
    callback(null, "Second function result");
};

const functionThree = (callback) => {
    console.log("From functionTree");
    callback(null, "Third function result")
};

funcStackArray.push(functionOne);
funcStackArray.push(functionTwo);
funcStackArray.push(functionThree);

async.parallel(funcStackArray, (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Result of async.parallel of array stack functions : ", result)
})

const startWaterFall = () => {
    async.waterfall(funcStackArray, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("Result of async.waterfall : ", result)
    })
};

startWaterFall();

const funcStackObj = {};

funcStackObj.getUsername = (callback) => {
    const userName = "KD";
    callback(null, userName);
};

funcStackObj.getAge = (callback) => {
    const age = 25;
    callback(null, age);
};

funcStackObj.getGender = (callback) => {
    const gender = "Male";
    callback(null, gender);
};

async.parallel(funcStackObj, (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Object stack func result: ", result);
});