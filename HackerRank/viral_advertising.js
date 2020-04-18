// Failed to solve
// Solution by Other Programmer
function viralAdvertising(input) {
    let reached = 2, 
        sharing = 2;
    for(let day = 1; day < input; day++)
    {
        reached += Math.floor((sharing * 3) / 2);
        sharing = Math.floor((sharing * 3) / 2);
    }
console.log(reached);
}

viralAdvertising(4)

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24

// Sample Input

// 3
// Sample Output

// 9

// 1,3,6,9,