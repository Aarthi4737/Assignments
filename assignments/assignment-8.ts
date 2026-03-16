//Assignment 7 - Date 16/03/2026 - Working with Strings

let inputPara:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let stringArray:string [] = inputPara.split(" ");
let javaOccurence:number = 0;
let index:number [] = [];
let j:number = 0;
let compareString:string = "Java"

for(let i:number = 0; i <= stringArray.length-1; i++){
    
    if(stringArray[i] === compareString){
        javaOccurence++;
        index [j] = i;
        j++;
    }
}

console.log("Find total number of occurrences of the word Java: " +javaOccurence);
console.log("Print count and Indexes of the word: " +index);