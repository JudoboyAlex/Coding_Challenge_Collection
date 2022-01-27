/**
 * We have a API that gets data from a database,
 * it takes an index parameter and returns a promise
 * Your challenge is to use Promise.all to make
 * 3 API calls and return all the data when the calls are complete
 */

// My solution
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakePeoplePromiseArray = [];
for (let i = 0; i < fakePeople.length; i++) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(fakePeople[i], 1000));
  });
  fakePeoplePromiseArray.push(promise);
}

const getAllData = () => {
  Promise.all(fakePeoplePromiseArray).then((data) => {
    console.log(data); // fakePeople array
  });
};

getAllData();
