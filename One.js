//1. switch variables
let a= 3
let b=5

let c= a
a=b
b=c

console.log(a)
console.log(b)


// 2. take input and only capitalise the first letter

let input=prompt("What is your name?")

snip=input.slice(0,1)
rest=input.slice(1)

let name= snip.toUpperCase()

console.log("Hello" + " " + name + rest)
