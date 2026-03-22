let inputNumbers: number [] = [1, 23, 25, 28, 34, 17, 13];

/*
inputNumbers.sort((a,b) => a-b);
console.log(inputNumbers);
*/


for(let i = 0; i < inputNumbers.length; i++)
{
	let swapped:boolean = false;
    for(let j = 0; j < inputNumbers.length; j++)
    {
        if(inputNumbers[j] > inputNumbers[j + 1]){
            let temp:number = inputNumbers[j];
            inputNumbers[j] = inputNumbers[j + 1];
            inputNumbers[j + 1] = temp;
            swapped = true;
        }
    }

    if (!swapped)
    break; 
}

console.log(inputNumbers);