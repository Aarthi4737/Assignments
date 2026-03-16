//Assignment 7 - Date 16/03/2026 - Working with Strings

let inputSentence:String = 'Java programming is fun and challenging';
let splitArray:string[] = inputSentence.split(" ")
let reverseString:string = '';
let capiString:string = '';

console.log("1.Count the total number of words in the sentence: " +splitArray.length);

for(let i:number = splitArray.length-1; i >= 0; i--){
    reverseString = reverseString + " " + splitArray[i];
}
console.log("\n2.Print the sentence words in reverse order: " +reverseString);

for(let i:number = 0; i <= splitArray.length-1; i++){
    capiString = capiString + " " + splitArray[i].charAt(0).toUpperCase() + splitArray[i].slice(1);
}
console.log("\n3.Convert the first character of each word to uppercase and print original sentence: " +capiString);