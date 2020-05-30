'use strict';
function Shop(location, max, min, avgCookies) {
    this.location = location;
    this.max = max;
    this.min = min;
    this.avgCookies = avgCookies;
    this.openHour = ['6 am', '7 am', '8 am', '9 am', '10 am'];
    this.cokiPerHour = [];
};

// Creating constractor which creats table of data
Shop.prototype.render = function () {
    var container = document.getElementById('shopsData');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var rowEl = document.createElement('tr');
    tableEl.appendChild(rowEl);
    var nameEl = document.createElement('th');
    rowEl.appendChild(nameEl);
    nameEl.textContent = this.location;
    var total=0;
    var amount;
    for (var index = 0; index < this.openHour.length; index++) {
        var cellEl = document.createElement('td');
        rowEl.appendChild(cellEl);
        // cell.textContent = ' ' + this.cokPerHour()[j];                         ***  this is the second mastaks, I have to call the function with out index
        amount=this.cookiesPerHour();
        cellEl.textContent = amount;                                                 //*** in this line I called the function more than once
        total+=amount;

        // console.log(this.cokiPerHour + '<>' + this.cookiesPerHour());
        // console.log(total+'total')

    };
    console.log('array'+this.cokiPerHour);
    var totalAmountEl=document.createElement('th');
    rowEl.appendChild(totalAmountEl);
    totalAmountEl.textContent=total;
    

};

// Creating function to calculate cookiesPerHour
Shop.prototype.cookiesPerHour = function () {
    //for(var i=0;i<this.openHour.length;i++){                              ***  this line I think it was a mastak in previous project, it make too mach values, becuse the function called more than onec and every call will creat values according to hours array

    var cookies = Math.floor(this.customer(this.max, this.min) * this.avgCookies)
    this.cokiPerHour.push(cookies);
    //  }
    return cookies;

};

// Calculating the customer randomly
Shop.prototype.customer = function (max, min) {
    var randomNum = Math.random() * (max - min) + min;
    return randomNum;
};

var creatPage = function () {

    var Amman = new Shop('Amman', 10, 2, 1);
    Amman.render();
    var Ajloun = new Shop('Ajloun', 50, 20, 3);
    Ajloun.render();
    


}

creatPage();
