const departures = [
  {
    time: { hrs: 8, mins: 14 },
    train: "Acela Express",
    no: 2153,
    to: "Washington, DC",
    status: "",
    track: 2,
  },
  {
    time: { hrs: 8, mins: 19 },
    train: "New Haven Line",
    no: 1541,
    to: "Grand Central Terminal",
    status: "On Time",
    track: 14,
  },
  {
    time: { hrs: 8, mins: 20 },
    train: "Shore Line East",
    no: 1606,
    to: "Old Saybrook",
    status: "On Time",
    track: 12,
  },
  {
    time: { hrs: 8, mins: 37 },
    train: "N.E. Regional",
    no: 190,
    to: "Boston South Station",
    status: "On Time",
    track: 1,
  },
  {
    time: { hrs: 8, mins: 40 },
    train: "Shuttle",
    no: 490,
    to: "Springfield",
    status: "On Time",
    track: 3,
  },
  {
    time: { hrs: 8, mins: 43 },
    train: "N.E. Regional",
    no: 96,
    to: "Newport News",
    status: "On Time",
    track: 2,
  },
  {
    time: { hrs: 8, mins: 50 },
    train: "New Haven Line",
    no: 1545,
    to: "Grand Central Terminal",
    status: "On Time",
    track: 8,
  },
  {
    time: { hrs: 9, mins: 16 },
    train: "Shore Line East",
    no: 1610,
    to: "Old Saybrook",
    status: "On Time",
    track: 10,
  },
  {
    time: { hrs: 9, mins: 23 },
    train: "New Haven Line",
    no: 1549,
    to: "Grand Central Terminal",
    status: "On Time",
    track: 14,
  },
  {
    time: { hrs: 9, mins: 36 },
    train: "Acela Express",
    no: 2150,
    to: "Boston-South Sta.",
    status: "",
    track: 1,
  },
  {
    time: { hrs: 9, mins: 46 },
    train: "New Haven Line",
    no: 1551,
    to: "Grand Central Terminal",
    status: "On Time",
    track: 8,
  },
  {
    time: { hrs: 10, mins: 13 },
    train: "N.E. Regional",
    no: 170,
    to: "Boston South Station",
    status: "On Time",
    track: 2,
  },
  {
    time: { hrs: 10, mins: 25 },
    train: "New Haven Line",
    no: 1553,
    to: "Grand Central Terminal",
    status: "On Time",
    track: 14,
  },
];

// const tbody = document.querySelector('.board__table tbody');
// departures.forEach((row) => {
//   const rowElm = document.createElement('tr');
//   rowElm.innerHTML += `
//     <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
//     <td class="board__train">${row.train}</td>
//     <td class="board__no">${row.no}</td>
//     <td class="board__to">${row.to}</td>
//     <td class="board__status">${row.status}</td>
//     <td class="board__track">${row.track}</td>
//     <td><button class="btn-delay">delay</button></td>
//   `;

//   const btnDelay = rowElm.querySelector('.btn-delay');
//   btnDelay.addEventListener('click', () => {
//     rowElm.classList.toggle('row-delayed');
//   });

//   tbody.appendChild(rowElm);
// });

const tbody = document.querySelector(".board__table tbody");
departures.forEach((row) => {
  // Create table row element
  const rowElm = document.createElement("tr");

  // Create and append each cell to the table row
  const timeCell = document.createElement("td");
  timeCell.classList.add("board__time");
  timeCell.textContent = `${row.time.hrs}:${row.time.mins}`;
  rowElm.appendChild(timeCell);

  const trainCell = document.createElement("td");
  trainCell.classList.add("board__train");
  trainCell.textContent = row.train;
  rowElm.appendChild(trainCell);

  const noCell = document.createElement("td");
  noCell.classList.add("board__no");
  noCell.textContent = row.no;
  rowElm.appendChild(noCell);

  const toCell = document.createElement("td");
  toCell.classList.add("board__to");
  toCell.textContent = row.to;
  rowElm.appendChild(toCell);

  const statusCell = document.createElement("td");
  statusCell.classList.add("board__status");
  statusCell.textContent = row.status;
  rowElm.appendChild(statusCell);

  const trackCell = document.createElement("td");
  trackCell.classList.add("board__track");
  trackCell.textContent = row.track;
  rowElm.appendChild(trackCell);
  let statusOnTime = false;

  // Create and append the button with event listener
  const btnDelay = document.createElement("button");
  btnDelay.classList.add("btn-delay");
  btnDelay.textContent = "delay";


  // Declare textField outside of the click event listener
  let textField;

  btnDelay.addEventListener("click", () => {
    rowElm.classList.toggle("row-delayed");
    // create text field on click
    if (statusCell.textContent === "On Time") {
      statusOnTime = true;
  
      // Create textField only if it doesn't exist
      if (!textField) {
        textField = document.createElement("input");
        textField.classList.add("input");
        textField.setAttribute("placeholder", "number + press enter");
  
        // Add event listener for keypress
        textField.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            statusCell.textContent = `${textField.value}min delay`;
            row.status = "Delayed";
          }
        });
  
        rowElm.appendChild(textField);
      }
    } else {
      statusCell.textContent = "On Time";
      row.status = "On Time";
  
      // Remove textField only if it exists
      if (textField) {
        textField.remove();
        textField = null; // Set textField to null after removal
      }
    }
  });


    // Shorthand
    // statusCell.textContent= statusCell.textContent === "On Time"? "Delayed":"On Time"

  const btnCell = document.createElement("td");
  btnCell.appendChild(btnDelay);
  rowElm.appendChild(btnCell);

  // Append the table row to the table's tbody
  tbody.appendChild(rowElm);
});
