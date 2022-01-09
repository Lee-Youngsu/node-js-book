function longRunningTask() {
    // 오래 걸리는 작업
    console.log('작업 끝');
}
function longRunningTask1() {
    // 오래 걸리는 작업
    console.log('작업 끝1');
}
function longRunningTask2() {
    // 오래 걸리는 작업
    console.log('작업 끝2');
}
console.log('시작');
setTimeout(longRunningTask, 1000);
setTimeout(longRunningTask1, 1000);
setTimeout(longRunningTask2, 0);
console.log('다음 작업');