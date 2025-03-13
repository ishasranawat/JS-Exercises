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



// 3. Age in days, weeks and months
function lifeInWeeks(age) {
    
console.log(`You have ${(90*365)-(age*365)} days, ${(90*52)-(age*52)} weeks, and ${(90*12)-(age*12)} months left.`)
}

lifeInWeeks(56);


// 4. BMI Calculator 
function bmiCalculator(weight, height){
    let bmi=Math.floor(weight/(height*height));
    console.log(bmi);  
} 
bmiCalculator(65, 1.8); 


//5. 
let input = prompt("Enter your number: ");
let count = input.length; 
console.log(count);

