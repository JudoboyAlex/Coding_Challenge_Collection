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