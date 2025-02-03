let sum= 0;
let i=1;
while(i<=5){
  sum+= i;
  i++;
}
console.log(sum);


/* countdown from 5 to 1 */
let countdown = [];
let i = 5;
while (i > 0) {
  countdown.push(i); 
  i--;
}
console.log(countdown);


/* do while loop to enter fav tea type until stop entered */
let teatype= [];
let tea= "";
do {
  tea = prompt("Enter your favorite tea type (or type 'stop' to exit):");
 teatype.push(tea);
}
while (tea!== "stop");
console.log(teatype);


/* do while loop to add numbers from 1 to 3 */
let total= 0;
let j=1;
do {
  total+= j;
  j++;
}
while (j<=3);
console.log(total);
