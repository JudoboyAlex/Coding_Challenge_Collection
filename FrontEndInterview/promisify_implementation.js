// From --> https://www.notion.so/Front-End-Preparation-a0ac842415a04ddf9319718ea6ba22a4
// Create a function to turn any function into a "promisified". 
// Any function to be promisified will always have a callback as the last argument. The callback, will always have this signature

/**
 * @param {Function} fn
 */
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve) => {
            function cb(result) {
                resolve(result);
            }
            fn.apply(this, args.concat(cb))
        })
    }
}

const exampleFn = function (a, b, cb) {
    cb(a + b);
}
const promisified = promisify(exampleFn);
promisified(5, 15).then(res => console.log(res)); //20

/*
function(result) {}
const exampleFn = function(x,y, callback) {}
const promisified = promisify(exampleFn);
promisified.then().then()...
*/