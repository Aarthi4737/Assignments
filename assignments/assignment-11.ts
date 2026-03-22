//Print 1 to 5 in a diamond

const n: number = 5;
let x1: number = 6;
for (let i: number = 1; i <= n; i++) {
    let row: string = '';
    for (let j: number = 1; j <= i; j++) {
        row = row + " " + j;
    }
    console.log(row.padStart(x1));
    x1++;
}

const n1:number = 1;
let x2:number = 9;
for (let i1: number = 4; i1 >= n1; i1--) {
    let row1: string = '';
    for (let j1: number = 1; j1 <= i1; j1++) {
        row1 = row1 + " " + j1;
    }
    console.log(row1.padStart(x2));
    x2--;
}