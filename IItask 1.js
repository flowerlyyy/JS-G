function getNumberFromUser(message){
    let userValue;
    let flag=false;
     
    do{
        if(flag){
            alert('You have to enter number');
        }
        userValue=+prompt(message);
        flag=true;
    } while(isNaN(userValue)){
    return userValue;}
    }
    
    // TASK 1
    //  The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
    // const b=getNumberFromUser('Enter number a');
    
    // calculateFormula(b);
        
    // function calculateFormula(a){
    //     for (let counter = 1; counter < 1000; counter++) {
    //         if(counter%a==0){
    //             console.log(counter);
    //         }
    
    //     }
    // }

    // TASK 2
    // The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
//     const c=getNumberFromUser('Enter 1 number C');
// console.log(c);
// calculateFormula2(c);
// function calculateFormula2 (b) {
//     let n=0;
//     for (let i = 1; i<b ; i++) {
//         if(i**2<b){
//             n=n+1;
//         }
//         }
//     console.log(n);
// }

// TASK 3
// The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// const d=getNumberFromUser('Enter 1 number D');
// console.log(d);
// findBigDivisor(d);
// function findBigDivisor(c){
// let big_number=0;
// for (let i1 = 0; i1 < c; i1++) {
//     if(c%i1==0){
//         big_number=i1;
//     }
//     }
//     console.log(big_number);
// }

// TASK 4
// The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// const a1=getNumberFromUser('Enter the number A');
// const b1=getNumberFromUser('Enter the number B');
// console.log(a1);
// console.log(b1);
// calculateSum(a1,b1);
// function calculateSum(a,b){
// let sum=0;
// for (let index = a+1; index <b; index++) {
//     if(index%7==0){
//         sum=sum+index;
//     }
//     }
//     console.log(sum);
// }

// TASK 5
// The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two.
//  The first and second are considered equal to 1.
// const num=getNumberFromUser('Enter 1 positive number N');
// console.log(num);
// calculateFibonacci(num);
// function calculateFibonacci(n){
// let n1=1;
// let n2=c1;
// let sum; 
// for(let i5=3; i5<=n ;i5++){
// sum=n1+n2;
// n1=n2;
// n2=sum;
// }
// console.log(n2);
// }

// TASK 6
// The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// let x1=getNumberFromUser('Enter the number X');
// let y1=getNumberFromUser('Please enter the number Y ')
// console.log(x1);
// console.log(y1);
// calculateEuclid(x1,y1);
// function calculateEuclid(x,y){
// let r;
// while((x%y)>0){
//     let r=x%y;
//     x=y;
//     y=r;
// }
// console.log(`GCD: ${y} `);
// }

// TASK 7
// The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
let m=getNumberFromUser('Enter 1number M');
console.log(m);
let mirror=0;
let r;
while(m!=0){        
r=m%10;
mirror=mirror*10+ r;
m=(m-r)/10;

}
console.log(mirror);


// TASK 8
// The user enters 2 numbers. Find out if these two numbers have the same digits.
//  For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let p1=+getNumberFromUser('Enter the number P');
// let k1=getNumberFromUser('Please enter the number K ')
// console.log(p1);
// console.log(k1);
// findRepeatingNumbers(p1,k1);
//  function findRepeatingNumbers(p,k){
// let r1,r2;
// let flag=0;
// let temp;
// while(p>0){
//     r1=p%10;
//     p=(p-r1)/10;
//     temp=k;
//     while(temp>0){
//         r2=temp%10;
//         temp=(temp-r2)/10;
//         if(r1==r2){
//             flag=1;
//             console.log('Yes');
//             break;
//         }
//     }
// }if(flag==0){
//     console.log('No');
// }
// }