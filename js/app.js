'use strict';

//Location 1

var Seattel = {
    location: 'Seattel',
    min: 23,
    max: 65,
    avgCookie: 6.3,
    obenHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    purchasedPerHour: [],
    //cookiesAmount : avgCookie*randomCus(max,min),

    randomCus: function (max, min) {
        return Math.random() * (max - min) + min;
    },

    cokPerHour: function () {
        var list = [];
        for (var i = 0; i < this.obenHour.length; i++) {
            this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
            // console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    },

    page: function () {

        console.log(document);
        var container = document.getElementById('location1');
        // console.log(container);
        var head = document.createElement('h1');
        container.appendChild(head);
        head.textContent = this.location;
        var unorderList = document.createElement('ul');
        container.appendChild(unorderList);

        var total = 0
        for (var j = 0; j < this.obenHour.length; j++) {

            var list1 = document.createElement('li');
            total += this.cokPerHour()[j];
            unorderList.appendChild(list1);
            // total+=unorderList.appendChild(list1);
            console.log(`total:${total}`);
            // 6am: 16 cookies
            list1.textContent = this.obenHour[j] + ' : ' + this.cokPerHour()[j] + ' cookies';
            //console.log(list1);

        }
        list1.textContent = `Total:${total} cookies`;


        // var list1=document.createElement('ul');
        // unorderList.appendChild(list1);
    },



};
// console.log(Seattel.randomCus(Seattel.max,Seattel.min));
// Seattel.cokPerHour();
Seattel.page();


//------------------------------------------------------------------------------------------------

//Location 2

var Tokyo = {
    location2: 'Tokyo',
    min: 3,
    max: 24,
    avgCookie: 1.2,
    obenHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    purchasedPerHour: [],
    //cookiesAmount : avgCookie*randomCus(max,min),


    randomCus: function (max, min) {
        return Math.random() * (max - min) + min;
    },

    cokPerHour: function () {
        var list = [];
        for (var i = 0; i < this.obenHour.length; i++) {
            this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
            // console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    },

    page: function () {

        console.log(document);
        var container = document.getElementById('location1');
        // console.log(container);
        var head = document.createElement('h1');
        container.appendChild(head);
        head.textContent = Tokyo.location2;
        console.log('location' + Tokyo.location2)
        var unorderList = document.createElement('ul');
        container.appendChild(unorderList);

        var total = 0
        for (var j = 0; j < this.obenHour.length; j++) {

            var list1 = document.createElement('li');
            total += this.cokPerHour()[j];
            unorderList.appendChild(list1);
            console.log(`total:${total}`);
            // 6am: 16 cookies
            list1.textContent = this.obenHour[j] + ' : ' + this.cokPerHour()[j] + ' cookies';
            //console.log(list1);

        }
        list1.textContent = `Total:${total} cookies`;


    },



};

Tokyo.page();





//Location 3

var Dubai = {
    location2: 'Dubai',
    min: 11,
    max: 38,
    avgCookie: 3.7,
    obenHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    purchasedPerHour: [],
    //cookiesAmount : avgCookie*randomCus(max,min),


    randomCus: function (max, min) {
        return Math.random() * (max - min) + min;
    },

    cokPerHour: function () {
        var list = [];
        for (var i = 0; i < this.obenHour.length; i++) {
            this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
            // console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    },

    page: function () {

        console.log(document);
        var container = document.getElementById('location1');
        // console.log(container);
        var head = document.createElement('h1');
        container.appendChild(head);
        head.textContent = this.location2;
        console.log('location' + Tokyo.location2)
        var unorderList = document.createElement('ul');
        container.appendChild(unorderList);

        var total = 0
        for (var j = 0; j < this.obenHour.length; j++) {

            var list1 = document.createElement('li');
            total += this.cokPerHour()[j];
            unorderList.appendChild(list1);
            console.log(`total:${total}`);
            // 6am: 16 cookies
            list1.textContent = this.obenHour[j] + ' : ' + this.cokPerHour()[j] + ' cookies';
            //console.log(list1);

        }
        list1.textContent = `Total:${total} cookies`;


    },



};

Dubai.page();






//Location 4

var Paris = {
    location2: 'Paris',
    min: 20,
    max: 38,
    avgCookie: 2.3,
    obenHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    purchasedPerHour: [],
    //cookiesAmount : avgCookie*randomCus(max,min),


    randomCus: function (max, min) {
        return Math.random() * (max - min) + min;
    },

    cokPerHour: function () {
        var list = [];
        for (var i = 0; i < this.obenHour.length; i++) {
            this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
            // console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    },

    page: function () {

        console.log(document);
        var container = document.getElementById('location1');
        // console.log(container);
        var head = document.createElement('h1');
        container.appendChild(head);
        head.textContent = this.location2;
        console.log('location' + Tokyo.location2)
        var unorderList = document.createElement('ul');
        container.appendChild(unorderList);

        var total = 0
        for (var j = 0; j < this.obenHour.length; j++) {

            var list1 = document.createElement('li');
            total += this.cokPerHour()[j];
            unorderList.appendChild(list1);
            console.log(`total:${total}`);
            // 6am: 16 cookies
            list1.textContent = this.obenHour[j] + ' : ' + this.cokPerHour()[j] + ' cookies';
            //console.log(list1);

        }
        list1.textContent = `Total:${total} cookies`;


    },



};

Paris.page();




//Location 5

var Lima = {
    location2: 'Lima',
    min: 2,
    max: 16,
    avgCookie: 4.6,
    obenHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    purchasedPerHour: [],
    //cookiesAmount : avgCookie*randomCus(max,min),


    randomCus: function (max, min) {
        return Math.random() * (max - min) + min;
    },

    cokPerHour: function () {
        var list = [];
        for (var i = 0; i < this.obenHour.length; i++) {
            this.purchasedPerHour.push(Math.floor(this.avgCookie * this.randomCus(this.max, this.min)));
            // console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    },

    page: function () {

        console.log(document);
        var container = document.getElementById('location1');
        // console.log(container);
        var head = document.createElement('h1');
        container.appendChild(head);
        head.textContent = this.location2;
        console.log('location' + Tokyo.location2)
        var unorderList = document.createElement('ul');
        container.appendChild(unorderList);

        var total = 0
        for (var j = 0; j < this.obenHour.length; j++) {

            var list1 = document.createElement('li');
            total += this.cokPerHour()[j];
            unorderList.appendChild(list1);
            console.log(`total:${total}`);
            // 6am: 16 cookies
            list1.textContent = this.obenHour[j] + ' : ' + this.cokPerHour()[j] + ' cookies';
            //console.log(list1);

        }
        list1.textContent = `Total:${total} cookies`;


    },



};

Lima.page();


