let inputDatas1:number[] = [7,1,5,3,6,4];
let costPrice:number;
let sellingPrice:number;
let profit:number;
let startSearch:number;
let endSearch:number;

let inputDatas2:number[] = [7,6,4,3,1];
let costPrice2:number;
let sellingPrice2:number;
let profit2:number;
let startSearch2:number;
let endSearch2:number;


console.log("Output for the 1st Input array");
for(let inputData1 of inputDatas1)
{
    if(inputDatas1[inputData1] === 1)
    {
        costPrice = inputDatas1[inputData1];
        startSearch = inputDatas1.indexOf(costPrice);
        endSearch = inputDatas1.length;

        if(startSearch === endSearch)
        {
            profit = 0;
            console.log("There are no profits since the price didn't increase after buying the stock, hence Profit is:" +profit);
        }
        else{
            let extractedInput:number [] = inputDatas1.slice(startSearch,endSearch);
            sellingPrice = Math.max(...extractedInput);
            profit = sellingPrice - costPrice;
            console.log("The possible profit on buying the stock is:" +profit);
        }
    }
}


console.log("\nOutput for the 2nd Input array");
for(let i:number=0; i < inputDatas2.length; i++)
{
    if(inputDatas2[i] === 1)
    {
        costPrice2 = inputDatas2[i];
        startSearch2 = inputDatas2.indexOf(costPrice2);
        endSearch2 = inputDatas2.length;

        if(startSearch2 === endSearch2)
        {
            profit2 = 0;
            console.log("There are no profits since the price didn't increase after buying the stock, hence Profit is:" +profit2);
        }
        else{
            let extractedInput2:number [] = inputDatas2.slice(startSearch2,endSearch2);
            sellingPrice2 = Math.max(...extractedInput2);
            profit2 = sellingPrice2 - costPrice2;
            console.log("The possible profit on buying the stock is:" +profit2);
        }
    }

    
}