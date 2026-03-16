//Assignment 7 - Date 16/03/2026 - Working with Strings

let printString:string = "*";
let lineString:string = '';
let rows:number = 5;
let x:number = 0;
let numberOfSpaces = 5;
let finalString:string = '';

for(let i:number = 1; i <= 5; i++){
  
   do
   {
        lineString = lineString + printString;
        finalString = lineString.padStart(numberOfSpaces);
        console.log(finalString);
        rows--;
   }
   while(rows=0);

}