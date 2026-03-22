let pow:number=1;
let temp:number;
let counNum:number = 0;

function calcPower(x:number, n:number):number {

    for(let i:number = n; n > 1; n--)
    {
        temp = x * x * pow;
        pow =  temp/2;
    }
    return pow;
}

console.log(calcPower(2, 10));
console.log(calcPower(2.10000, 3));
console.log(calcPower(2.00000, -2));