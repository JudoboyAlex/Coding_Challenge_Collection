/*
12) Given a json input, where each entry represents a directory such that each directory 
in turn can have a nested entry of it's own. Create the resulting directory structure.
*/

// Expected output
// "├── root
//        ├── Downloads
//             ├──movie.mp4
//        ├── Documents
//             ├── app
//                  ├──index.html
//                  ├── src
//                       ├──index.js
//        ├── Pictures
//             ├──2018-09-12.jpg
//             ├──2020-19-03.jpg
//        ├── Music
//             ├── hiphop
//                  ├──music-hiphop.mp3
//             ├── classical
//                  ├──music-classical-1.mp3
//                  ├──music-classical-2.mp3
//                  ├──music-classical-3.mp3
//             ├── desi
//                  ├──music-desi-1.mp3
//   "
const directoryRoot = [
  {
    type: "folder",
    name: "root",
    path: "/root",
    children: [
      {
        type: "folder",
        name: "Downloads",
        path: "/downloads",
        children: [
          {
            type: "file",
            name: "movie.mp4",
            path: "/movie",
            children: [],
          },
        ],
      },
      {
        type: "folder",
        name: "Documents",
        path: "/documents",
        children: [
          {
            type: "folder",
            name: "app",
            path: "/app",
            children: [
              {
                type: "file",
                name: "index.html",
                path: "/index.html",
                children: [],
              },
              {
                type: "folder",
                name: "src",
                path: "/src",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                    path: "/index.js",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "folder",
        name: "Pictures",
        path: "/pictures",
        children: [
          {
            type: "file",
            name: "2018-09-12.jpg",
            path: "/2018-09-12.jpg",
            children: [],
          },
          {
            type: "file",
            name: "2020-19-03.jpg",
            path: "/2020-19-03.jpg",
            children: [],
          },
        ],
      },
      {
        type: "folder",
        name: "Music",
        path: "/music",
        children: [
          {
            type: "folder",
            name: "hiphop",
            path: "/hiphop",
            children: [
              {
                type: "file",
                name: "music-hiphop.mp3",
                path: "/music-hiphop.mp3",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "classical",
            path: "/classical",
            children: [
              {
                type: "file",
                name: "music-classical-1.mp3",
                path: "/music-classical-1.mp3",
                children: [],
              },
              {
                type: "file",
                name: "music-classical-2.mp3",
                path: "/music-classical-2.mp3",
                children: [],
              },
              {
                type: "file",
                name: "music-classical-3.mp3",
                path: "/music-classical-3.mp3",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "desi",
            path: "/desi",
            children: [
              {
                type: "file",
                name: "music-desi-1.mp3",
                path: "/music-desi-1.mp3",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
const recursive = function (dir, index) {
  let str = " ".repeat(index) + "├── " + dir.name;
  index += 5;
  str += `
  `;
  for (const folder of dir.children) {
    str += constructDirectory(folder, index);
  }
  return str;
};

const constructDirectory = function (root, index) {
  if (root && root.type === "file") {
    return " ".repeat(index) + "├──" + root.name + "\n\t";
  }
  return recursive(root, index);
};

console.log(constructDirectory(directoryRoot.pop(), 0));

