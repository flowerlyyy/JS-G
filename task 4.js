const a=+prompt('Enter the number A');
const b=+prompt('Enter the number B');
console.log(a);
console.log(b);
let sum=0;
for (let index = a+1; index <b; index++) {
    if(index%7==0){
        sum=sum+index;
    }
    }
    console.log(sum);