function test(a,b,c,d,e,f,g,h) {
    console.log('args :', arguments);
}
// test(1,2,23,3,4,5,67,8);

const test2 = (...arg) => {
    console.log(arg);
}

test2(1,2,3,3,4,5,6,7,3,7,8);