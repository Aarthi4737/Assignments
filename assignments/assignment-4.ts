//Assignment 3 - Date 11/03/2026 - Conditional Statements & Loops)

let bankTransactions:Map<number,number> = new Map;
bankTransactions.set(1,50000);
bankTransactions.set(2,-2000);
bankTransactions.set(3,3000);
bankTransactions.set(4,-15000);
bankTransactions.set(5,-200);
bankTransactions.set(6,-300);
bankTransactions.set(7,4000);
bankTransactions.set(8,-3000);

let creditTransaction:number = 0;
let debitTransaction:number = 0;
let totalAmount:number = 0;
let creditAmount:number = 0;
let debitAmount:number = 0;
let suspiciousTransaction:number = 0;

for(let i:number = 1; i<bankTransactions.size+1; i++)
{
    //1.Print total number of credit and debit transactions completed & Print the total amount credited and debited in account
    if(bankTransactions.get(i) > 0)
    {
        creditTransaction = creditTransaction + 1;
        creditAmount = creditAmount + bankTransactions.get(i);
    }
    else
    {
        debitTransaction = debitTransaction + 1;
        debitAmount = debitAmount + bankTransactions.get(i);
    }

    //3. Print the total amount credited and debited in account
    totalAmount = totalAmount + bankTransactions.get(i);

    //4. Transaction exceeds +/- 10000 display message
    if((bankTransactions.get(i) < -10000) || (bankTransactions.get(i) > 10000))
    {
        suspiciousTransaction = suspiciousTransaction + 1;
        console.log(`Suspicious Transaction ${suspiciousTransaction}: Suspicious credit/ debit Transaction with Amount ${bankTransactions.get(i)}`);
    }
}

console.log("\nTotal number of Suspicious Transactions: " +suspiciousTransaction);
console.log("Total Number of Credit Transactions: " +creditTransaction);
console.log("Total Number of Debit Transactions: " +debitTransaction);
console.log("Total Amount credited: " +creditAmount);
console.log("Total Amount debited: " +debitAmount);
console.log("Amount remaining in Account after the Transactions: " +totalAmount);