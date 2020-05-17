'use strict';

//Location 1

var Seattel={
    location:'Seattel',
    min:23,
    max:65,
    avgCookie:6.3,
    obenHour:[6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    purchasedPerHour:[],
    //cookiesAmount : avgCookie*randomCus(max,min),

    randomCus:function(max,min){
        return Math.random() * (max - min) + min;
    },

    cokPerHour:function(){
        var list=[];
        for(var i=0;i<this.obenHour.length;i++){ 
            this.purchasedPerHour.push(Math.floor(this.avgCookie*this.randomCus(this.max,this.min))) ;
            console.log('list= '+this.obenHour[i]+'hou'+this.purchasedPerHour);
        }
        return this.purchasedPerHour;
    }

         

};
console.log(Seattel.randomCus(Seattel.max,Seattel.min));
Seattel.cokPerHour();

//Location 2

var Tokyo={

};


//Location 3

var Dubai={

};



//Location 4

var Paris={

};


//Location 5

var Lima={

};