//Assignment 6 - Date 16/03/2026 - (Conditional Statements & Loops)

let inputArray:number [] = [7,25,1];
let index:number = inputArray.length;
let findDivisor:number;

for (let i = 0; i < index; i++) {

    if(inputArray[i] === 1)
    {
        console.log("1 has only one divisor (1 itself), which is not sufficient for it to be considered prime");
        break;
    }
        
    if(inputArray[i]%1 == 0 && inputArray[i]%inputArray[i] == 0)
    {       
        
        for (findDivisor=3; findDivisor>0; findDivisor++){
            if(inputArray[i]%findDivisor == 0 && findDivisor != inputArray[i])
            {
                console.log(`The givenumber ${inputArray[i]} is NOT Prime Number since it has more two divisors 1, ${inputArray[i]} and ${findDivisor}`);
                break;
            }
            else if(findDivisor == inputArray[i])
            {
                console.log(`The givenumber ${inputArray[i]} is Prime Number since it has exactly two divisors 1 and ${inputArray[i]}`);
                break;
            }

        } 
                
    }   
} 