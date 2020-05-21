'use strict';
var obenHour = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];// To save the objects of every individual location

// ------------------------------------------------------------------------------------
// the following function creats the first row in table which includes the working hour


function hoursTable() {
    // obenHour.push('Daily Location Total');
    var container = document.getElementById('location1');

    var tableEl = document.createElement('table');
    container.appendChild(tableEl);

    var row = document.createElement('tr');
    tableEl.appendChild(row);

    var head = document.createElement('th');
    row.appendChild(head);

    head.textContent = 'Work Hours';

    for (var hour = 0; hour <= obenHour.length; hour++) {

        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = obenHour[hour];
    }
    cell.textContent = 'Daily Location Total';
}


// -------------------------------------------------------
// creating a constractor

function Shop(location, min, max, avgCookie) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.purchasedPerHour = [];//to save the calculated valus of purchesed cookies per hour
    locations.push(this)
}

// this method calculat random num. of customers depending on max, min and avgCookies properities

Shop.prototype.randomCus = function (max, min) {
    return Math.random() * (max - min) + min;
};

//this method calculats the valus of purchesed cookies per hour and push the result to "purchasedPerHour = []" proparity accordingly.
Shop.prototype.cokPerHour = function () {
    // var list = [];
    for (var i = 0; i < obenHour.length; i++) {
        this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
        // I am trying to make the as : this.purchasedPerHour=avrgCookies*this.randomCus

    }
    return this.purchasedPerHour;
};

// the following method creat entire table
Shop.prototype.page = function () {

    var container = document.getElementById('location1');

    var tableEl = document.createElement('table');
    container.appendChild(tableEl);

    var row = document.createElement('tr');
    tableEl.appendChild(row);

    var head = document.createElement('th');
    row.appendChild(head);

    head.textContent = this.location + '';//sit "location" propirety on the first cell in row

    // the following loop creat cells for table and call "cokPerHour()[j]" method through the loop and use "openHour" the globel var as acounter to creat compleat row.
    var totalData = 0;//to calculat the total amount for location
    for (var j = 0; j < obenHour.length; j++) {

        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = ' ' + this.cokPerHour()[j];
        totalData += this.cokPerHour()[j];//update the "totalData" var. to keep adding the values

    }
    // creat the last cell to save the "totalData"
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = totalData;
    console.log('totalData' + totalData);

};


//the folowing function calculat the Total amount of cookies for all location per hour(vertically through the table)
function allCokPerHour() {

    var container = document.getElementById('location1');

    var tableEl = document.createElement('table');
    container.appendChild(tableEl);

    var row = document.createElement('tr');//new row
    tableEl.appendChild(row);

    var head = document.createElement('th');
    row.appendChild(head);

    head.textContent = 'Total';

    // this loops calculat table valus vertically.
    // the first loop hold on spisific"obenHour" until the next loop get all that "obenHour" valus for all rows.

    var perHour = [];//to creat array contains all total amount per hour
    var all = 0;       //to save the total of total
    for (var hour = 0; hour < obenHour.length; hour++) {
        var totalSum = 0;
        for (var index = 0; index < locations.length; index++) {  //make the globle "locations"array as counter wich is contains the locations objects 
            totalSum += locations[index].purchasedPerHour[hour];  //add "totalSum" to previous, asb for sure valus and start from 0
        }

        all += totalSum;
        perHour.push(totalSum);//save in array

        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = perHour[hour];
    }
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = all;

    perHour.push(all);

    
    return [totalSum, perHour];
};


// calling the constracters and functions


hoursTable();
var Seattel = new Shop('Seattel', 23, 65, 6.3);
Seattel.page();
var Tokyo = new Shop('Tokyo', 3, 24, 1.2);
Tokyo.page();
var Dubai = new Shop('Dubai', 11, 38, 3.7);
Dubai.page();
var Paris = new Shop('Paris', 20, 38, 2.3);
Paris.page();
var Lima = new Shop('Lima', 2, 16, 4.6);
Lima.page();
allCokPerHour();



var newLocation=document.getElementById('NewLocation');

newLocation.addEventListener('submit',function(event){


   event.preventDefault();
    console.log(event);

    var XLocation=event.target.location.value;
    var maxVlaue=event.target.max.value;
    var minVlaue=event.target.min.value;
    var avgVlaue=event.target.avg.value;

    var creat=new Shop(XLocation, minVlaue, maxVlaue, avgVlaue);
    // locations.push(creat);
//    for (var x;x<locations.length;x++){
       
//        locations[x];
//        console(locations[x]);
//    }
    console.log(locations);
    creat.page();
    
    
});
console.log(locations);









