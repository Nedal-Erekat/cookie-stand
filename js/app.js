'use strict';
var obenHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations=[];
//console.log(locations+'= locations')
function Shop(location,min,max,avgCookie){
    this.location=location;
    this.min=min;
    this.max=max;
    this.avgCookie=avgCookie;
    this.purchasedPerHour=[];
    locations.push(this)
}

Shop.prototype.randomCus=function (max, min) {
    return Math.random() * (max - min) + min;
};
Shop.prototype.cokPerHour= function () {
    var list = [];
    for (var i = 0; i < obenHour.length; i++) {
        this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
        // I am trying to make the following : this.purchasedPerHour=avrgCookies*this.randomCus
        
    }
    return this.purchasedPerHour;
};

Shop.prototype.page= function () {

    //console.log(document);
    var container = document.getElementById('location1');
     //console.log(container);
     var tableEl=document.createElement('table');
     container.appendChild(tableEl);
     var row=document.createElement('tr');
     tableEl.appendChild(row);
     var head = document.createElement('th');
     row.appendChild(head);
     head.textContent = this.location+'';


    var totalData = 0;
    for (var j = 0; j < obenHour.length; j++) {

       
        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = ' ' + this.cokPerHour()[j] ;
        totalData += this.cokPerHour()[j];
        // total+=unorderList.appendChild(list1);
       console.log(`total:${totalData}`);
        // 6am: 16 cookies
        //console.log(list1);
    }
   cell.textContent = totalData;
    // var list1=document.createElement('ul');
    // unorderList.appendChild(list1);


};

var Seattel=new Shop('Seattel',23,65,6.3);
Seattel.page();
var Tokyo=new Shop('Tokyo',3,24,1.2);
Tokyo.page();
var Dubai=new Shop('Dubai',11,38,3.7);
Dubai.page();
var Paris=new Shop('Paris',20,38,2.3);
Paris.page();
var Lima=new Shop('Lima',2,16,4.6);
Lima.page();







