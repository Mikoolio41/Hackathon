//Define Global Variables for easier use

// const fullName = document.getElementById("fullName").value;
// const income = document.getElementById("income").value;

const submitButton = document.querySelector(`button[name="submit"]`);
submitButton.addEventListener("click", getData);

const delColumnButton = document.querySelector(`button[name="clear"]`);
delColumnButton.addEventListener("click", removeData);

// const testChange = () => {
//   if (mySwitch.checked == true) {
//     alert("checked");
//   } else {
//     alert("not checked");
//   }
// };

let mySwitch = document.querySelector(`input[id="switchExpenseType"]`);
let lastInput = document.querySelector(`input[id="shopping"]`);
let currency = document.querySelector(`select[id="currency"]`);

const changeInput = () => {
  const switchLabel = document.querySelector(`label[class="form-check-label"]`);
  if (mySwitch.checked == true) {
    switchLabel.innerHTML = "actual spending";
  } else {
    switchLabel.innerHTML = "planned spending by percent";
  }
};

const calculateSavings = () => {
  let month = document.querySelector(`input[name="month"]`).value;
  let income = Number(
    document.querySelector(`input[name="customer_income"]`).value
  );
  let mortgage = Number(document.querySelector(`input[name="mortgage"]`).value);
  let utilities = Number(
    document.querySelector(`input[name="utilities"]`).value
  );
  let healthcare = Number(
    document.querySelector(`input[name="healthcare"]`).value
  );
  let insurance = Number(
    document.querySelector(`input[name="insurance"]`).value
  );
  let groceries = Number(
    document.querySelector(`input[name="groceries"]`).value
  );
  let vacation = Number(document.querySelector(`input[name="vacation"]`).value);
  let lifestyle = Number(
    document.querySelector(`input[name="lifestyle"]`).value
  );
  let entertainment = Number(
    document.querySelector(`input[name="entertainment"]`).value
  );
  let shopping = Number(document.querySelector(`input[name="shopping"]`).value);
  if (mySwitch.checked == false) {
    let savings =
      100 -
      (mortgage +
        utilities +
        healthcare +
        insurance +
        groceries +
        vacation +
        lifestyle +
        entertainment +
        shopping);
    document.querySelector(`input[name="savings"]`).value = savings;
  } else if (mySwitch.checked == true) {
    let savings =
      income -
      (mortgage +
        utilities +
        healthcare +
        insurance +
        groceries +
        vacation +
        lifestyle +
        entertainment +
        shopping);
    document.querySelector(`input[name="savings"]`).value = savings;
  }
};

mySwitch.addEventListener("change", changeInput);
lastInput.addEventListener("change", calculateSavings);

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
    "savings",
  ],
  color: [
    "blue",
    "green",
    "red",
    "#a2a224",
    "purple",
    "#ff92a5",
    "turquoise",
    "#5c57bb",
    "magenta",
    "orange",
  ],
};

let expenseArray = {
  month: [],
  income: [],
  mortgage: [],
  utilities: [],
  healthcare: [],
  insurance: [],
  groceries: [],
  vacation: [],
  lifestyle: [],
  entertainment: [],
  shopping: [],
  savings: [],
};
let percentArray = {
  month: [],
  income: [],
  mortgage: [],
  utilities: [],
  healthcare: [],
  insurance: [],
  groceries: [],
  vacation: [],
  lifestyle: [],
  entertainment: [],
  shopping: [],
  savings: [],
};

const ctx = document.getElementById("chartsum");

const expenseChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: expenseArray.month,
    datasets: [
      {
        label: categoryColor.category[0],
        data: expenseArray.mortgage,
        backgroundColor: categoryColor.color[0],
      },
      {
        label: categoryColor.category[1],
        data: expenseArray.utilities,
        backgroundColor: categoryColor.color[1],
      },
      {
        label: categoryColor.category[2],
        data: expenseArray.healthcare,
        backgroundColor: categoryColor.color[2],
      },
      {
        label: categoryColor.category[3],
        data: expenseArray.insurance,
        backgroundColor: categoryColor.color[3],
      },
      {
        label: categoryColor.category[4],
        data: expenseArray.groceries,
        backgroundColor: categoryColor.color[4],
      },
      {
        label: categoryColor.category[5],
        data: expenseArray.vacation,
        backgroundColor: categoryColor.color[5],
      },
      {
        label: categoryColor.category[6],
        data: expenseArray.lifestyle,
        backgroundColor: categoryColor.color[6],
      },
      {
        label: categoryColor.category[7],
        data: expenseArray.entertainment,
        backgroundColor: categoryColor.color[7],
      },
      {
        label: categoryColor.category[8],
        data: expenseArray.shopping,
        backgroundColor: categoryColor.color[8],
      },
      {
        label: categoryColor.category[9],
        data: expenseArray.savings,
        backgroundColor: categoryColor.color[9],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
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
          text: document.querySelector(`select[id="currency"]`).value,
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
    labels: percentArray.month,
    datasets: [
      {
        label: categoryColor.category[0],
        data: percentArray.mortgage,
        backgroundColor: categoryColor.color[0],
      },
      {
        label: categoryColor.category[1],
        data: percentArray.utilities,
        backgroundColor: categoryColor.color[1],
      },
      {
        label: categoryColor.category[2],
        data: percentArray.healthcare,
        backgroundColor: categoryColor.color[2],
      },
      {
        label: categoryColor.category[3],
        data: percentArray.insurance,
        backgroundColor: categoryColor.color[3],
      },
      {
        label: categoryColor.category[4],
        data: percentArray.groceries,
        backgroundColor: categoryColor.color[4],
      },
      {
        label: categoryColor.category[5],
        data: percentArray.vacation,
        backgroundColor: categoryColor.color[5],
      },
      {
        label: categoryColor.category[6],
        data: percentArray.lifestyle,
        backgroundColor: categoryColor.color[6],
      },
      {
        label: categoryColor.category[7],
        data: percentArray.entertainment,
        backgroundColor: categoryColor.color[7],
      },
      {
        label: categoryColor.category[8],
        data: percentArray.shopping,
        backgroundColor: categoryColor.color[8],
      },
      {
        label: categoryColor.category[9],
        data: percentArray.savings,
        backgroundColor: categoryColor.color[9],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
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
          text: document.querySelector(`select[id="currency"]`).value,
          color: "#191",
        },
      },
    },
  },
});

const checkCurrency = (chart) => {
  if (currency.value == "Euro") {
    chart.options.scales.y.title.text = "\u20ac";
  } else {
    chart.options.scales.y.title.text = currency.value;
  }
  chart.update();
};

const updateAxis = () => {
  checkCurrency(expenseChart);
  checkCurrency(percentChart);
};

currency.addEventListener("change", updateAxis);

// Fetch the data from the HTML form

function getData(e) {
  e.preventDefault();

  // Create variables for the data

  let month = document.querySelector(`input[name="month"]`).value;
  let income = Number(
    document.querySelector(`input[name="customer_income"]`).value
  );
  let mortgage = Number(document.querySelector(`input[name="mortgage"]`).value);
  let utilities = Number(
    document.querySelector(`input[name="utilities"]`).value
  );
  let healthcare = Number(
    document.querySelector(`input[name="healthcare"]`).value
  );
  let insurance = Number(
    document.querySelector(`input[name="insurance"]`).value
  );
  let groceries = Number(
    document.querySelector(`input[name="groceries"]`).value
  );
  let vacation = Number(document.querySelector(`input[name="vacation"]`).value);
  let lifestyle = Number(
    document.querySelector(`input[name="lifestyle"]`).value
  );
  let entertainment = Number(
    document.querySelector(`input[name="entertainment"]`).value
  );
  let shopping = Number(document.querySelector(`input[name="shopping"]`).value);
  let savings = Number(document.querySelector(`input[name="savings"]`).value);

  // Create variables for the table and charts

  let newMonth = {
    month: month,
    income: income,
    mortgage: mortgage,
    utilities: utilities,
    healthcare: healthcare,
    insurance: insurance,
    groceries: groceries,
    vacation: vacation,
    lifestyle: lifestyle,
    entertainment: entertainment,
    shopping: shopping,
    savings: savings,
  };

  let newMonthPercent = {
    month: month,
    income: income,
    mortgage: Number(((mortgage / income) * 100).toFixed(1)),
    utilities: Number(((utilities / income) * 100).toFixed(1)),
    healthcare: Number(((healthcare / income) * 100).toFixed(1)),
    insurance: Number(((insurance / income) * 100).toFixed(1)),
    groceries: Number(((groceries / income) * 100).toFixed(1)),
    vacation: Number(((vacation / income) * 100).toFixed(1)),
    lifestyle: Number(((lifestyle / income) * 100).toFixed(1)),
    entertainment: Number(((entertainment / income) * 100).toFixed(1)),
    shopping: Number(((shopping / income) * 100).toFixed(1)),
    savings: Number(((savings / income) * 100).toFixed(1)),
  };

  // Validation Checks

  function checkPercent() {
    let sum =
      mortgage +
      utilities +
      healthcare +
      insurance +
      groceries +
      vacation +
      lifestyle +
      entertainment +
      shopping +
      savings;
    if (sum != 100) {
      return false;
    } else {
      return true;
    }
  }

  function checkIncomeSum() {
    let sum =
      mortgage +
      utilities +
      healthcare +
      insurance +
      groceries +
      vacation +
      lifestyle +
      entertainment +
      shopping +
      savings;
    if (sum != newMonth.income) {
      return false;
    } else {
      return true;
    }
  }

  // Append data to table

  function addPlanning(tblId) {
    const tblHeadObj = document.getElementById(tblId).tHead;
    let newTH = document.createElement("th");
    tblHeadObj.rows[0].appendChild(newTH);
    newTH.innerHTML = "Planned Expenses";

    let tblBodyObj = document.getElementById(tblId).tBodies[0];
    let cellText = [];
    for (x in newMonth) {
      cellText.push(Number((newMonth[x] / 100) * newMonth.income).toFixed(0));
    }
    for (i = 0; i < tblBodyObj.rows.length; i++) {
      let newCell = tblBodyObj.rows[i].insertCell(-1);
      newCell.innerHTML = cellText[i + 2];
    }
  }

  function addColumn(tblId) {
    const tblHeadObj = document.getElementById(tblId).tHead;
    for (h = 0; h < tblHeadObj.rows.length; h++) {
      let newTH = document.createElement("th");
      tblHeadObj.rows[h].appendChild(newTH);
      newTH.innerHTML = newMonth.month;
    }

    let tblBodyObj = document.getElementById(tblId).tBodies[0];
    let cellText = [];
    for (x in newMonth) {
      cellText.push(newMonth[x]);
    }

    for (i = 0; i < tblBodyObj.rows.length; i++) {
      let newCell = tblBodyObj.rows[i].insertCell(-1);
      newCell.innerHTML = cellText[i + 2];
    }
  }
  function deleteColumn(tblId) {
    let allRows = document.getElementById(tblId).rows;
    for (i = 0; i < allRows.length; i++) {
      if (allRows[i].cells.length > 1) {
        allRows[i].deleteCell(-1);
      }
    }
  }

  // Append Data to Chart arrays

  function chartIt() {
    for (let i in expenseArray) {
      expenseArray[i].push(newMonth[i]);
    }

    for (let i in percentArray) {
      percentArray[i].push(newMonthPercent[i]);
    }

    expenseChart.update();
    percentChart.update();
  }

  if (mySwitch.checked == false) {
    if (checkPercent() == true) {
      addPlanning("expensesTable");
    } else {
      alert("The percents you entered do not add to 100");
    }
  } else if (mySwitch.checked == true) {
    if (checkIncomeSum() == true) {
      addColumn("expensesTable");
      chartIt();
    } else {
      alert("The sums you entered do not add to the month's income");
    }
  }

  document.querySelector("form").reset();

  // Test stuff
}

// Remove data

function removeData() {
  function deleteColumn(tblId) {
    let allRows = document.getElementById(tblId).rows;
    for (i = 0; i < allRows.length; i++) {
      if (allRows[i].cells.length > 1) {
        allRows[i].deleteCell(-1);
      }
    }
  }

  function removeChartData(chart, arr) {
    for (x in arr) {
      arr[x].pop();
    }
    chart.update();
  }

  deleteColumn("expensesTable");
  removeChartData(expenseChart, expenseArray);
  removeChartData(percentChart, percentArray);
}
console.log(document.querySelector(`select[id="currency"]`).value);

console.log(expenseChart.options.scales.y.title.text);
