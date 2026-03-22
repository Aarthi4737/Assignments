let pow:number=1;

function calcPower(x:number, n:number):number {
if(n>0)
          {  for(let i:number = 1; i<=n; i++)
    {
     pow=pow*x;
    }
}
else if(n<0)
{
    for(let i:number=0; i>n; i--)
        pow=pow*x;
pow=1/pow;
}

return pow;
}

console.log(calcPower(2, 10));
console.log(calcPower(2.10000, 3));
console.log(calcPower(2.000000, -2));