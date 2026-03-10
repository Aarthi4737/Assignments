//Assignment 2 - Date 10/03/2026 - Conditional Statements

console.log("Evaluvate the Loan Application of Bank Customers\n");
evaluvateLoanApplication("John Doe", 720, 55000, true, 35.0); //Goes through conditions
evaluvateLoanApplication("Sravan", 750, 55000, true, 35.0); //Automatic Approval
evaluvateLoanApplication("Pavithra", 800, 55000, true, 35.0); //Automatic Approval
evaluvateLoanApplication("Praveen", 600, 55000, true, 35.0); //Credit Score < 650 denied
evaluvateLoanApplication("Aditya", 720, 35000, true, 35.0); //Income < 50000 denied
evaluvateLoanApplication("Jagadeesh", 720, 55000, false, 35.0); //User is Unemployed hence denied
evaluvateLoanApplication("Sowmya", 720, 55000, true, 55.0); //DTI is > 40% hence denied


function evaluvateLoanApplication(customerName:string ,creditScore:number, income:number , isEmployed:boolean, debtToIncomeRatio:number) {
    /*console.log(customerName);
    console.log(creditScore);
    console.log(income);
    console.log(isEmployed);
    console.log(debtToIncomeRatio);*/

    if(creditScore >= 750)
    {
        console.log(`Loan Approved for ${customerName} as Credit Score of the Application is greater than/Equal to 750 \n`);
    }
    else if ((creditScore > 650) && (creditScore < 750))
    {
        if(income === 50000 || income > 50000)
        {
            if (isEmployed)
            {
                if(debtToIncomeRatio < 40)
                {
                    console.log(`Loan Approved for ${customerName} based on the below factors, as Loan Applicant's Credit Score is ${creditScore} \nIncome of the Loan Applicant is ${income} \nLoan Applicant is Employed \nDebt To Income Ratio of the Loan applicant is ${debtToIncomeRatio} \n`);
                }
                else
                {
                    console.log(`Loan Application is Denied for ${customerName}, as DTI ratio is 40% or greater \n`);
                }
            }
            else
            {
                console.log(`Loan Application is Denied for ${customerName}, as User is Un-employed \n`);
            }
        }
        else
        {
            console.log(`Loan Application is Denied for ${customerName}, as Income is less than the baseline set \n`);
        }
    }
    else if (creditScore < 650)
    {
        console.log(`Loan Application is Denied for ${customerName}, as Credit Score of the Loan Applicant is ${creditScore} \n`);
    }
}