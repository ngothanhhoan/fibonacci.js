var i;
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 1000; i++) {
  fib[i] = fib[i - 2] + fib[i - 1]; //số sau bằng tổng của 2 số trước liền kề
}

console.log(fib)