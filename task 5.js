const n=+prompt('Enter 1 positive number N');
console.log(n);
let n1=1;
let n2=1;
let sum=0; 
if(n==1){
    console.log(n1);
} 
else if(n==2){
    console.log(n2);
} else{
for(let i5=3; i5<n ;i5++){
sum=n1+n2;
n1=n2;
n2=sum;
}
console.log(sum);}