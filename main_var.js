var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // i variable is available outside of for loop also. i is available
    // anywhere in the function "doSomething" in JavaScript till 2015 - ES5.
    console.log('Finally : ' + i);
}
//doSomething();
function letUsecase() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('I is not accessible outside the loop');
}
letUsecase();
