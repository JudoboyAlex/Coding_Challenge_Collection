// My Solution
function gradingStudents(grades) {
    let arr = [];
    let final_grade = 0;
    for (let i=0; i < grades.length; i++){
        if (grades[i] % 5 == 3 && grades[i] > 37){
            console.log(grades[i])
            final_grade = grades[i] + 2
            arr.push(final_grade)
        } else if (
            grades[i] % 5 == 4 && grades[i] > 37
        ) {
            final_grade = grades[i] + 1
            arr.push(final_grade)
        } else {
            arr.push(grades[i])
        }
    }
    return arr;
}

console.log(gradingStudents([73,67,38,33]))

// Other Programmer Solution
function gradingStudents(grades){
    return grades.map(function(grade)  {
        return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
    });
}


// Input Output
// 73      75
// 67      67
// 38      40
// 33      33

