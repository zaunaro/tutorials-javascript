// You should be able to get the oldest Protocol of these list
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

function getOldestProtocols(aProtocols) {
  // Insert Code Here

  let aDates = [];

  /* for (let i = 0; i < aProtocols.length; i++) {
    aDates.push(aProtocols[i].shiftStartDate);
  } */

  /* let i = 0;
  do {
    aDates.push(aProtocols[i].shiftStartDate);
    i++;
  } while (i < aProtocols.length); */

  aDates = aProtocols.map((oProtocol) => {
    return oProtocol.shiftStartDate;
  });

  aDates.sort();

  return aProtocols.find((protocol) => protocol.shiftStartDate === aDates[0]);
}

console.log(getOldestProtocols(aProtocols));
