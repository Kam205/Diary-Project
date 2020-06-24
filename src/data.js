export default function getChartData(dataset) {
  console.log(dataset);
  if (dataset === "projects") {
    return getP();
  }

  if (dataset.includes("TEM") || dataset.includes("New Project")) {
    return getTL();
  }

  if (dataset.includes("Testing")) {
    return getTT();
  }
}

function getP() {
  return [
    {
      name: "Pass",
      color: "green",
      data: [
        {
          name: "TEM",
          y: 156,
        },
        {
          name: "New Project",
          y: 123,
        },
      ],
    },
    {
      name: "Fail",
      color: "red",
      data: [
        {
          name: "TEM",
          y: 1222,
        },
        {
          name: "New Project",
          y: 453,
        },
      ],
    },
    {
      name: "Skip",
      color: "blue",
      data: [
        {
          name: "TEM",
          y: 233,
        },
        {
          name: "New Project",
          y: 442,
        },
      ],
    },
  ];
}

function getTL() {
  return [
    {
      name: "Pass",
      color: "green",
      data: [
        {
          name: "Performance Testing",
          y: 88,
        },
      ],
    },
    {
      name: "Fail",
      color: "red",
      data: [
        {
          name: "Performance Testing",
          y: 232,
        },
      ],
    },
    {
      name: "Skip",
      color: "blue",
      data: [
        {
          name: "Performance Testing",
          y: 2,
        },
      ],
    },
    {
      name: "Pass",
      color: "green",
      data: [
        {
          name: "Functional Testing",
          y: 123,
        },
      ],
    },
    {
      name: "Fail",
      color: "red",
      data: [
        {
          name: "Functional Testing",
          y: 333,
        },
      ],
    },
    {
      name: "Skip",
      color: "blue",
      data: [
        {
          name: "Functional Testing",
          y: 20,
        },
      ],
    },
  ];
}

function getTT() {
  return [
    {
      name: "Pass",
      color: "green",
      data: [
        {
          name: "Auto",
          y: 100,
        },
      ],
    },
    {
      name: "Fail",
      color: "red",
      data: [
        {
          name: "Auto",
          y: 822,
        },
      ],
    },
    {
      name: "Skip",
      color: "blue",
      data: [
        {
          name: "Auto",
          y: 300,
        },
      ],
    },
    {
      name: "Pass",
      color: "green",
      data: [
        {
          name: "Manual",
          y: 1233,
        },
      ],
    },
    {
      name: "Fail",
      color: "red",
      data: [
        {
          name: "Manual",
          y: 788,
        },
      ],
    },
    {
      name: "Skip",
      color: "blue",
      data: [
        {
          name: "Manual",
          y: 453,
        },
      ],
    },
  ];
}
