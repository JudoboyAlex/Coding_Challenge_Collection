function rowSumOddNumbers(n) {
    let oddNum = [];
    for( let i=1; i < 50; i++){
        if (i % 2 == 1){
            oddNum.push(i)
        }
    }
    console.log(oddNum);
    console.log(oddNum[n], )

}

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29

// rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8