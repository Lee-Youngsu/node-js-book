const timeout = setTimeout(() => {
    console.log('1.5 이후 실 행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행 x');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 25000);

const immeduate = setImmediate(() => {
    console.log('즉시 실행');

});

const immediate2 = setImmediate(() => {
    console.log('실행 되지 않음');

});


clearImmediate(immediate2);