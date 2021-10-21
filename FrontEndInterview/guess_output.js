
const obj = {
  x:1,
  getX(){
    let that = this;
    const inner = function(){
      console.log(that.x)
    }
    inner();
    inner.bind(this)();
  }
};

console.log(obj.getX());

/*
function() will get undefined so there are 3 solutions:
1. use arrow function
2. use inner.bind(this)()
3. use let that = this then that.x
*/