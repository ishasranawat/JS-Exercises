// sum of 1 to n
// 1.
function sum(n){
  let ans=0;
  for ( let i=1; i<=n; i++) {
    ans= ans+ i
  }
  return ans;
}
const ans=sum(10);
console.log(ans)

// 2.
function sum(n){
  return (n*(n+1)/2);
  }
console.log(sum(10));
// to read contents of a file
const fs= require("fs");
// require- syntax to get the file system module
// (fs is an external library (file system))
const contentsA= fs.readFileSync("a.txt", "utf-8"); 
// (utf-8 is encoding for English language) (readFileSync is a function)
console.log(contentsA);  

const contentsB= fs.readFileSync("b.txt", "utf-8"); 
console.log(contentsB);  
