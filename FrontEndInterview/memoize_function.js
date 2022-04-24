// Roadside Coder solution
function myMemoize(fn, context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    };
}

const clumsyProduct = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++){}

    return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('First call');

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("Second call");