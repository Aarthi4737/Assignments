//Calculate Profit

const inputArray: Map<string,number[]> = new Map();
inputArray.set("inputDatas1",[7,1,5,3,6,4]);
inputArray.set("inputDatas2",[7,6,4,3,1]);

for(let key of inputArray.keys())
{
    const input: number[] = inputArray.get(key)!;
    calculateProfit(input);
}

function calculateProfit(inputDatas:number[]){

    let costPrice:number;
    let sellingPrice:number;
    let profit:number;
    let startSearch:number;
    let endSearch:number;

    console.log("\nOutput for the Array "+ inputDatas);

    for(let inputData of inputDatas)
    {
        
        if(inputDatas[inputData] === 1)
        {
            costPrice = inputDatas[inputData];
            startSearch = inputDatas.indexOf(costPrice);
            endSearch = inputDatas.length;

            if(startSearch === endSearch)
            {
                profit = 0;
                console.log("There are no profits since the price didn't increase after buying the stock, hence Profit is: " +profit);
            }
            else{
                let extractedInput:number [] = inputDatas.slice(startSearch,endSearch);
                sellingPrice = Math.max(...extractedInput);
                profit = sellingPrice - costPrice;
                console.log("The possible profit on buying the stock is: " +profit);
            }
        }
}
}