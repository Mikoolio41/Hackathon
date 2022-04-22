//Define Global Variables for easier use

const fullName = document.getElementById("fullName").value;
// const income = document.getElementById("income").value;
document
  .querySelector(`button[name="submit"]`)
  .addEventListener("click", getData);

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
  currency: "\u20AC",
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
  currency: "\u20AC",
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

// document
//   .querySelector(`input[name="submit"]`)
//   .addEventListener("submit", getData);

class MonthExpense {
  constructor(
    name,
    year,
    currency,
    income,
    mortgage,
    utilities,
    healthcare,
    insurance,
    groceries,
    vacation,
    lifestyle,
    entertainment,
    shopping
  ) {
    this.name = name;
    this.year = year;
    this.currency = currency;
    this.income = income;
    this.mortgage = mortgage;
    this.utilities = utilities;
    this.healthcare = healthcare;
    this.insurance = insurance;
    this.groceries = groceries;
    this.vacation = vacation;
    this.lifestyle = lifestyle;
    this.entertainment = entertainment;
    this.shopping = shopping;
  }
}
function getData(e) {
  e.preventDefault();
  // let a = document.getElementById("month").value;
  const ctx = document.getElementById("chartsum");

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
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Month",
            color: "#191",
          },
        },
        y: {
          stacked: true,

          title: {
            display: true,
            text: sampleMonth1.currency,
            color: "#191",
          },
        },
      },
    },
  });

  const ctx1 = document.getElementById("chartpercent");

  const percentChart = new Chart(ctx1, {
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
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Month",
            color: "#191",
          },
        },
        y: {
          stacked: true,

          title: {
            display: true,
            text: "Percentage",
            color: "#191",
          },
        },
      },
    },
  });

  let newMonth = new MonthExpense(
    document.querySelector(`input[name="month"]`).value,
    document.querySelector(`input[name="year"]`).value,
    document.querySelector(`select[name="currency"]`).value,
    Number(document.querySelector(`input[name="customer_income"]`)),
    Number(document.querySelector(`input[name="mortgage"]`)),
    Number(document.querySelector(`input[name="utilities"]`)),
    Number(document.querySelector(`input[name="healthcare"]`)),
    Number(document.querySelector(`input[name="insurance"]`)),
    Number(document.querySelector(`input[name="groceries"]`)),
    Number(document.querySelector(`input[name="vacation"]`)),
    Number(document.querySelector(`input[name="lifestyle"]`)),
    Number(document.querySelector(`input[name="entertainment"]`)),
    Number(document.querySelector(`input[name="shopping"]`))
  );

  // function newDataset() {
  //   for (i = 4; i < 13; i++) {
  //     newMonth[i].value;
  //   }
  // }

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  addData(expenseChart, newMonth.name, newDataset);

  // expenseChart.data.labels.push(newMonth.name);
  // expenseChart.data.datasets[0].data.push(newMonth.mortgage);
  // console.log(a);
  console.log(document.querySelector(`input[name="month"]`).value);
  console.log(newMonth);
  console.log(newMonth.mortgage);
  console.log(expenseChart.data.datasets[0].data);
  console.log(expenseChart.data.datasets);
  // return newMonth;
}
