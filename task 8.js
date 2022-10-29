let p=+prompt('Enter the number P');
let k=+prompt('Please enter the number K ')
console.log(p);
console.log(k);
let r1,r2;
let flag=0;
let temp;
while(p>0){
    r1=p%10;
    p=(p-r1)/10;
    temp=k;
    while(temp>0){
        r2=temp%10;
        temp=(temp-r2)/10;
        if(r1==r2){
            flag=1;
            console.log('Yes');
            break;
        }
    }
}if(flag==0){
    console.log('No');
}
