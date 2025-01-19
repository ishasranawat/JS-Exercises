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
