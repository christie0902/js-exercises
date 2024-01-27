const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

const div = document.createElement('div');
const body = document.querySelector('body');
const tbody = document.querySelector('table tbody');

// departures.forEach ((departure, i)=> {
//     const hour = Math.floor(departure/60);
//     const min = departure % 60;
//     const div = document.createElement('div');
//     body.appendChild(div);
//     div.innerHTML = `<li>${hour}:${min}</li>`;
//     tbody.innerHTML +=  `<tr><td>${hour}:${min}</td></tr>`;
//    i++
// })


const departuresObject = [
    {hrs: 8, mins: 14},
    {hrs: 8, mins: 19},
    {hrs: 8, mins: 20},
    {hrs: 8, mins: 37},
    {hrs: 8, mins: 40},
    {hrs: 8, mins: 43},
    {hrs: 8, mins: 50},
    {hrs: 9, mins: 16},
    {hrs: 9, mins: 23},
    {hrs: 9, mins: 36},
    {hrs: 9, mins: 46},
    {hrs: 10, mins: 13},
    {hrs: 10, mins: 25},
   ]


for (const departure of departuresObject ) {
    tbody.innerHTML += `<tr><td>${departure.hrs}:${departure.mins}</td></tr>`;
   }


const departuresArr = [
    {time: {hrs: 8, mins: 14}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
    {time: {hrs: 8, mins: 19}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
   ]

const tableBody = document.querySelector('.train-table tbody');
const theadRow = document.querySelector('.train-table thead');

const createdRows = [];

departuresArr.forEach((departure, i) => {
    const row = tableBody.insertRow();
    const timeCell = row.insertCell(0);
    const trainCell = row.insertCell(1);
    const numberCell = row.insertCell(2);
    const toCell = row.insertCell(3);
    const statusCell = row.insertCell(4);
    const trackCell = row.insertCell(5);

    // style for each Cell
    trainCell.style.backgroundColor= 'green';
    toCell.style.backgroundColor= 'red';

    timeCell.textContent = `${departure.time.hrs}:${departure.time.mins}`;
    trainCell.textContent = departure.train;
    numberCell.textContent = departure.no;
    toCell.textContent = departure.to;
    statusCell.textContent = departure.status;
    trackCell.textContent = departure.track;

    // saving the data inside of the loop as an object in an array
    createdRows.push({
        id:  i,
        row: row,
        cells: [timeCell,trainCell,numberCell,toCell,statusCell,trackCell]
    })
})

// Access it by using the same format written in the loop
// console.log(createdRows[0].cells[0])
// createdRows[0].cells[0].style.backgroundColor = 'red';