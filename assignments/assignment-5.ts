//Assignment 5 - Date 12/03/2026 - Conditional Statements & Loops)

console.log(calculateHike("Alice Johnson",75000,5.1,4.2));
console.log(calculateHike("Bob Smith",68000,3.2,3.8)); 
console.log(calculateHike("Carol Davisn",82000,7.1,4.5));
console.log(calculateHike("David Brown",90000,10.2,2.5));
console.log(calculateHike("Eva Green",60000,2.4,3.5));

function calculateHike(empName:string, baseSalary:number, yearsOfExp:number, yearEndRating:number) : Map<string, string>
{
    let variablePay:number = 0;
    let bonusAmount:number = 0;
    let rewardPerk:number = 0;
    let hikeAmount:number = 0;
    let hikePercent:number = 0;
    let returnMap:Map<string, string> = new Map();
    let roundedHikePercent:string = '';

    if (yearEndRating >= 4)
    {
        variablePay = 15;
        bonusAmount = 1500;
        if (yearsOfExp >= 5)
            {
                rewardPerk =  5000;
            }   
    } 
    else if (yearEndRating >= 3 && yearEndRating < 4)
        {
            variablePay = 10;
            bonusAmount = 1200;
            if (yearsOfExp >= 5)
            {
                rewardPerk =  5000;
            }
        }
    else if (yearEndRating < 3)
        {
            variablePay = 3;
            bonusAmount = 300;
            if (yearsOfExp >= 5)
            {
                rewardPerk =  5000;
            }
        }
    
    hikeAmount = (baseSalary * variablePay) + bonusAmount + rewardPerk;
    hikePercent = hikeAmount/baseSalary;
    roundedHikePercent = hikePercent.toFixed(2);
    
    returnMap.set(empName,roundedHikePercent);
    return returnMap;
}