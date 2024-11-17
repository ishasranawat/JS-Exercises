// BMI Calculator
function bmiCalculator (weight, height) {
    let bmi=weight/(height*height)
    
    
    if (bmi<18.5){
    return `Your BMI is ${bmi}, so you are underweight.`;
}
else if (bmi >= 18.5 && bmi <= 24){
    return `Your BMI is ${bmi}, so you have a normal weight.`;
}
else {
    return `Your BMI is ${bmi}, so you are overweight.`;
}
}

bmiCalculator(49,1.5)


// Leap year 
function isLeap(year) {
    
if ((year%4===0 && year%100!==0) || (year%400===0)) {
    return "Leap year."; 
}
else {
    return "Not leap year.";
}

isLeap(2024)

