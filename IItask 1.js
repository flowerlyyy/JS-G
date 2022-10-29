const a=+prompt('Enter 1 number A');
console.log(a);
for (let counter = 1; counter < 1000; counter++) {
    if(counter%a==0){
        console.log(counter);
    }
    
    
}