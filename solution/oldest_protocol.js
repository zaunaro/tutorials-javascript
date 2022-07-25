const aProtocols = [
  {
    _id: "61151f1dda8a85c9662efe6f",
    topic: "6113e0660c8535bebc84b48f",
    shift: {
      _id: "6130b1d045b0280ba1eaed27",
      abbreviation: "FS",
    },
    shiftStartDate: "2021-05-18T04:00:00.000Z",
    createdAt: "2021-05-18T03:01:00.000Z",
  },
  {
    _id: "611a4f2b9b30a61b33b0a409",
    topic: "6115310b31b6e46ba1cdeed2",
    shift: {
      _id: "6130b1d045b0280ba1eaed28",
      abbreviation: "FS",
    },
    shiftStartDate: "2021-05-19T04:00:00.000Z",
    createdAt: "2021-05-19T07:00:35.000Z",
  },
  {
    _id: "6130b13345b0280ba1eaece8",
    topic: "6113e0660c8535bebc84b48f",
    shift: {
      _id: "6130b13345b0280ba1eaece9",
      abbreviation: "SS",
    },
    shiftStartDate: "2021-05-18T12:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.517Z",
  },
  {
    _id: "6130b13345b0280ba1eaeceb",
    topic: "6113e0660c8535bebc84b48f",
    shift: {
      _id: "6130b13345b0280ba1eaecec",
      abbreviation: "NS",
    },
    shiftStartDate: "2021-05-18T18:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.555Z",
  },
  {
    _id: "6130b13345b0280ba1eaecee",
    topic: "6113e0660c8535bebc84b48f",
    shift: {
      _id: "6130b13345b0280ba1eaecef",
      abbreviation: "FS",
    },
    shiftStartDate: "2021-05-19T04:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.571Z",
  },
  {
    _id: "6130b13345b0280ba1eaecfd",
    topic: "6115310b31b6e46ba1cdeed2",
    shift: {
      _id: "6130b13345b0280ba1eaecfe",
      abbreviation: "SS",
    },
    shiftStartDate: "2021-05-19T12:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.628Z",
  },
  {
    _id: "6130b13345b0280ba1eaed00",
    topic: "6115310b31b6e46ba1cdeed2",
    shift: {
      _id: "6130b13345b0280ba1eaed01",
      abbreviation: "FS",
    },
    shiftStartDate: "2021-05-20T04:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.636Z",
  },
  {
    _id: "6130b13345b0280ba1eaed03",
    topic: "6115310b31b6e46ba1cdeed2",
    shift: {
      _id: "6130b13345b0280ba1eaed04",
      abbreviation: "SS",
    },
    shiftStartDate: "2021-05-20T12:00:00.000Z",
    createdAt: "2021-09-02T11:10:43.645Z",
  },
];

/****************************************** Daniel ********************************************************/
function getOldestProtocols(aProtocols) {
  var oldestTopics = {};
  aProtocols.forEach(protocol => {
    var topic = protocol.topic;
    if (!oldestTopics.hasOwnProperty(topic)) {
            oldestTopics[topic] = protocol;
    } else if (oldestTopics[topic].shiftStartDate > protocol.shiftStartDate) {
          oldestTopics[topic] = protocol;
    }
  })
  return Object.values(oldestTopics);
}

/****************************************** Flo ********************************************************/
// function getOldestProtocols(aProtocols) {
//     const oldest = {};
//   for (let index = 0; index < aProtocols.length; index++) {
//     const element = aProtocols[index];
//         if (oldest[element.topic] == null || oldest[element.topic].shiftStartDate > element.shiftStartDate){
//         oldest[element.topic] = element
//     }
//   }
//   return Object.values(oldest);
// }

/****************************************** Simon ********************************************************/
// function getOldestProtocols(aProtocols) {
//     return aProtocols.reduce((map, shiftProtocol) => {
//             const topic = shiftProtocol.topic;
//             if (!map.has(topic)) map.set(topic, shiftProtocol);
//             if (map.get(topic).shiftStartDate > shiftProtocol.shiftStartDate) map.set(topic, shiftProtocol);
//             return map;
//         }, new Map());
// }

/****************************************** Uli ********************************************************/
// function getOldestProtocols(aProtocols) {
//     let result = [];
//   function groupArrayOfObjects(list, key) {
//     return list.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   };
//   function reducerFindOldest(acc, obj) {
//     return acc && new Date(acc.shiftStartDate) < new Date(obj.shiftStartDate) ? acc : obj;
//   }
//   // group by topic
//   let groupedProtocols = groupArrayOfObjects(aProtocols,"topic")
//   // for each group, get the oldest
//   for(let [a,b] of Object.entries(groupedProtocols)){
//     result.push(b.reduce(reducerFindOldest));
//   }
//   return result;
// }

console.log(getOldestProtocols(aProtocols));
