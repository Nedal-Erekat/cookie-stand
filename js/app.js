'use strict';
var obenHour = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var locations = [];

function hoursTable() {
    // obenHour.push('Daily Location Total');
    var container = document.getElementById('location1');
    //console.log(container);
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



//console.log(locations+'= locations')
function Shop(location, min, max, avgCookie) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.purchasedPerHour = [];
    locations.push(this)
}

Shop.prototype.randomCus = function (max, min) {
    return Math.random() * (max - min) + min;
};
Shop.prototype.cokPerHour = function () {
    var list = [];
    for (var i = 0; i < obenHour.length; i++) {
        this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
        // I am trying to make the following : this.purchasedPerHour=avrgCookies*this.randomCus

    }
    return this.purchasedPerHour;
};

Shop.prototype.page = function () {

    //console.log(document);
    var container = document.getElementById('location1');
    //console.log(container);
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var row = document.createElement('tr');
    tableEl.appendChild(row);
    var head = document.createElement('th');
    row.appendChild(head);
    head.textContent = this.location + '';


    var totalData = 0;
    for (var j = 0; j < obenHour.length; j++) {


        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = ' ' + this.cokPerHour()[j];
        totalData += this.cokPerHour()[j];
        // total+=unorderList.appendChild(list1);
        //console.log(`in hour ${this.cokPerHour()[j]} ,total(${j}):${totalData}`);
        // 6am: 16 cookies
        //console.log(list1);
    }
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = totalData;
    console.log('totalData' + totalData);
    // var list1=document.createElement('ul');
    // unorderList.appendChild(list1);   
};


//Total number for coolies for all location per day and per hour
function allCokPerHour() {

    var container = document.getElementById('location1');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var row = document.createElement('tr');//new row
    tableEl.appendChild(row);
    var head = document.createElement('th');
    row.appendChild(head);
    head.textContent = 'Total';

    var perHour = [];
    var all=0;
    for (var hour = 0; hour < obenHour.length; hour++) {
        var totalSum = 0;
        for (var index = 0; index < locations.length; index++) {
            totalSum += locations[index].purchasedPerHour[hour];
        }

        all+=totalSum;
        perHour.push(totalSum);
        console.log('totalSum: '+totalSum+' ,All: '+all);
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

//console.log('total Sum:' + allCokPerHour()[0] + 'Per Hour sum' + allCokPerHour()[1]);
//console.log('indexSeattel 0: '+locations[0].purchasedPerHour[0]);






