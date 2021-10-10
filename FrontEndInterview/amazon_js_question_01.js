const developerProfiles = [
  { skill: "javascript", user: "Chad" },  
  { skill: "javascript", user: "Bill" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue HTML" },
  { skill: "css", user: "Sue CSS" },
  { skill: "css", user: "Bill CSS" },
];

// Expected output
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ];

// Solution#1
function reArrange(profiles) {
  const skills = {};
  const finalArray = [];

  for (let i = 0; i < developerProfiles.length; i++) {
    let { skill, user } = developerProfiles[i]; // Destructure object
    user = user.split(" ")[0]; // Get the name only
    // Add to object if we haven't seen this skill or push new user
    skills[skill] ? skills[skill].push(user) : (skills[skill] = [user]);
  }

  // Create the final array
  Object.entries(skills).forEach(([skill, users]) => {
    finalArray.push({ skill, user: users, count: users.length });
  });

  // Sort it by count
  finalArray.sort((a, b) => (a.count < b.count ? 1 : -1));

  return finalArray;
}

//  console.log(reArrange(developerProfiles))

// Solution#2
const collectSkills = (profiles) => {
  const groups = profiles.reduce((acc, profile) => {
    if (!acc[profile.skill]) {
      acc[profile.skill] = { skill: profile.skill, users: [], count: 0 };
    }

    const user = profile.user.split(" ")[0];

    // const userRe = new RegExp(profile.skill, "ig");
    // const user = profile.user.replace(userRe, "").trim();

    acc[profile.skill].users.push(user);
    acc[profile.skill].count++;

    return acc;
  }, {});

  return Object.values(groups).sort((a, b) => b.count - a.count);
};

// console.log(collectSkills(developerProfiles));

// Solution#3
const sortedDevelopers = (profiles) => {
  const result = Object.values(
    profiles.reduce((obj, { skill, user }) => {
      user = user.split(" ")[0];

      if (!obj[skill])
        return {
          ...obj,

          [skill]: {
            skill: skill,

            user: [user],

            count: 1,
          },
        };

      obj[skill].user.push(user);

      obj[skill].count = obj[skill].user.length;

      return obj;
    }, {})
  );
  return result;
};

console.log(sortedDevelopers(developerProfiles));
