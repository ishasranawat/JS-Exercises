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
