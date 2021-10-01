// https://www.reddit.com/r/learnjavascript/comments/pxd0gq/how_can_i_determine_how_many_nested_arrays_i_can/
const users = [
  { id: 1, name: "Alex", room: 1 },
  { id: 2, name: "Zero", room: 1 },
  { id: 3, name: "Mike", room: 2 },
  { id: 4, name: "Raziel", room: 3 }
];


// Expected Output
// const rooms = [
//   [ 
//      { id: 1, name: "Alex", room: 1 },
//      { id: 2, name: "Zero", room: 1 },
//   ],
//   [
//      { id: 3, name: "Mike", room: 2 },
//   ],
//   [
//      { id: 4, name: "Raziel", room: 3 }
//   ]
// ];

// Solution #1
const usersByRoom = users.reduce(
  (obj, user) => {
    if (!obj.hasOwnProperty(user.room)) {
      obj[user.room] = [];
    }

    obj[user.room].push(user);
    return obj;
  },
  {}
);
// console.log(usersByRoom)
// Guaranteed to be ordered by room number:
const rooms = Object.values(usersByRoom);
// console.log(rooms)

// Solution #2 --> Does not change state
let usersByRooms = Object.values(users.reduce(
  (acc, user) => {
      var obj = Object.assign(acc);
      obj[user.room] = (obj[user.room] || []).concat(user)
      return obj;
  }, {}));

console.log(usersByRooms);