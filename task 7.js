let m=+prompt('Enter 1number M');
console.log(m);
let mirror=0;
let r;
while(m!=0){     
r=m%10;
mirror=mirror*10+ r;
m=(m-r)/10;
}
console.log(mirror);


