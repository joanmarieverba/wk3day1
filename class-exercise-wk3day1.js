//map

var origPriceList = [10, 20, 30, 40, 60];

var discountPriceList = origPriceList.map (function (item) {
  return item - item*.15;
});

console.log (discountPriceList);


console.assert(discountPriceList[0] === 8.5);
console.assert(discountPriceList[1] === 17);
console.assert(discountPriceList[2] === 25.5);
console.assert(discountPriceList[3] === 34);

//filter

newPriceList = [];
newPriceList = origPriceList.filter (function (i) {

  if (i < 30 ) {return true;} else {return false;}

});

console.log (newPriceList);
console.assert(newPriceList[0] === 10);
console.assert(newPriceList[1] === 20);

//reduce

//var totalPurchase = 0;
totalPurchase = origPriceList.reduce(function(a, v) {
              { return a+v ;}
              return totalPurchase;});

console.log(totalPurchase);
console.assert(origPriceList.reduce(function(a, v){ return a+v ;}) === 160);
console.assert([10, 15, 20, 25, 30].reduce(function(a, v){ return a+v ;}) === 100);


// sort

var priceList = [5, 2, 45, 12, 26, 68];

var sortedList = priceList.sort (function (a, b){
  if (a < b) {return -1;}
  else if (a > b ) {return 1;}
  else {return 0;}
});
console.log (sortedList)  ;
console.assert(sortedList[0] === 2);
console.assert(sortedList[1] === 5);
console.assert(sortedList[4] === 45);
