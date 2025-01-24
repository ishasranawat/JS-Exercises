// fizzbuzz 
var i= 1
while (i<=100) {
    if (i%3==0 && i%5==0) {
        console.log("Fizzbuz")
    }
    else if (i%3==0) {
        console.log("Fizz")
    }
    else if (i%5==0) {
        console.log("Buzz")
    }
    else {
        console.log (i)
    }
    i++
}

// 99 bottles
function bottle() {
let i=99

while(i>=1) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
    i--
}
console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.")
}

bottle();


// fibonacci using recursion
function fibonacciRecursive(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(10));

// iteration 
function fibonacciIterative(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}


