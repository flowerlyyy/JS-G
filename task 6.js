let x=+prompt('Enter the number X');
let y=+prompt('Please enter the number Y ')
console.log(x);
console.log(y);
let r;
while((x%y)>0){
    let r=x%y;
    x=y;
    y=r;
}
console.log(`GCD: ${y} `);