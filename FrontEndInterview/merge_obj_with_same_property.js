// https://www.reddit.com/r/learnjavascript/comments/sabwlg/merge_array_of_objects_that_have_the_same/
var Students = [
  {
    ID: 1,
    Name: "John Doe",
    SponserID: 421,
    SponserName: "Mark",
  },
  {
    ID: 1,
    Name: "John Doe",
    SponserID: 341,
    SponserName: "James",
  },
  {
    ID: 2,
    Name: "James Law",
    SponserID: 421,
    SponserName: "Mark",
  },
];

function modifiedStudents(students) {
  let grouped = {};

  students.forEach(({ ID, Name, SponserID, SponserName }) => {
    grouped[ID] = grouped[ID] ?? { ID, Name, Sponsers: [] }; // nullish coalescing operator (??)
    grouped[ID].Sponsers = [
      ...grouped[ID].Sponsers,
      { SponserID, SponserName },
    ];
  });

  return Object.values(grouped);
}

console.log(modifiedStudents(Students));
// var ModifiedStudents = [
//   {
//     ID: 1,
//     Name: "John Doe",
//     Sponsers: [
//       {
//         SponserID: 421,
//         SponserName: "Mark",
//       },
//       {
//         SponserID: 341,
//         SponserName: "James",
//       },
//     ],
//   },
//   {
//     ID: 2,
//     Name: "James Law",
//     SponserID: 421,
//     SponserName: "Mark",
//   },
// ];