//Define Global Variables for easier use

const fullName = document.getElementById("fullName").value;
const income = document.getElementById("income").value;

let categoryColor = {
  category: [
    "mortgage",
    "utilities",
    "healthcare",
    "insurance",
    "groceries",
    "vacation",
    "lifestyle",
    "entertainment",
    "shopping",
  ],
  color: [
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "pink",
    "turquoise",
    "azure",
    "magenta",
  ],
};
let sampleMonth1 = {
  name: "January",
  year: 2022,
  currency: "NIS",
  income: 30000,
  mortgage: 6000,
  utilities: 5000,
  healthcare: 4000,
  insurance: 3000,
  groceries: 2000,
  vacation: 2500,
  lifestyle: 3500,
  entertainment: 2500,
  shopping: 1500,
};
let sampleMonth2 = {
  name: "February",
  year: 2022,
  currency: "NIS",
  income: 30000,
  mortgage: 5000,
  utilities: 4000,
  healthcare: 3000,
  insurance: 2000,
  groceries: 1000,
  vacation: 3500,
  lifestyle: 4500,
  entertainment: 5500,
  shopping: 2500,
};

const ctx = document.getElementById("chart");

const expenseChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [sampleMonth1.name, sampleMonth2.name],
    datasets: [
      {
        label: categoryColor.category[0],
        data: [sampleMonth1.mortgage, sampleMonth2.mortgage],
        backgroundColor: categoryColor.color[0],
      },
      {
        label: categoryColor.category[1],
        data: [sampleMonth1.utilities, sampleMonth2.utilities],
        backgroundColor: categoryColor.color[1],
      },
      {
        label: categoryColor.category[2],
        data: [sampleMonth1.healthcare, sampleMonth2.healthcare],
        backgroundColor: categoryColor.color[2],
      },
      {
        label: categoryColor.category[3],
        data: [sampleMonth1.insurance, sampleMonth2.insurance],
        backgroundColor: categoryColor.color[3],
      },
      {
        label: categoryColor.category[4],
        data: [sampleMonth1.groceries, sampleMonth2.groceries],
        backgroundColor: categoryColor.color[4],
      },
      {
        label: categoryColor.category[5],
        data: [sampleMonth1.vacation, sampleMonth2.vacation],
        backgroundColor: categoryColor.color[5],
      },
      {
        label: categoryColor.category[6],
        data: [sampleMonth1.lifestyle, sampleMonth2.lifestyle],
        backgroundColor: categoryColor.color[6],
      },
      {
        label: categoryColor.category[7],
        data: [sampleMonth1.entertainment, sampleMonth2.entertainment],
        backgroundColor: categoryColor.color[7],
      },
      {
        label: categoryColor.category[8],
        data: [sampleMonth1.shopping, sampleMonth2.shopping],
        backgroundColor: categoryColor.color[8],
      },
    ],
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});
