// 1D array,list - duplicate element
let results = ["pass", "fail", "pass"];
console.log(results[0]); // "pass"
console.log(results[1]); // "fail"
console.log(results[2]); // "pass"
console.log(results); // ["pass", "fail", "pass"]
console.log("--------------------");

// 2D — array of arrays (like a table/grid)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] // 3x3
];

let mad = [
    [1,2,3,4] //1x4
]

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] // 3x3
];

for(let i=0;i<grid.length;i++)
{
    for(let j=0;j<grid[i].length;j++)
    {
        process.stdout.write(grid[i][j]+" ");
    }
    console.log("");
}