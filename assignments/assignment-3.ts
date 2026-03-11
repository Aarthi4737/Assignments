//Assignment 3 - Date 11/03/2026 - Arrays/Datatypes/Operators

let studentName:string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks:number[] = [75, 80, 82]
let maxIndex:number = studentMarks.length;
let updatedMarks:number[] = [0, 0, 0];
let sumOfArrayValues:number = 0;

console.log("Updated Marks:");
for(let i:number = 0; i < maxIndex; i++)
    {
      updatedMarks[i] = studentMarks[i] + 10;
      console.log(`${studentName[i]} : ${updatedMarks[i]}`);
      sumOfArrayValues += updatedMarks[i]
    }

console.log("\nAverage Marks:" +sumOfArrayValues/maxIndex);


