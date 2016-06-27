// using our own forEach(), map(), reduce(), and filter()
// functions written in js-functions-functional-practice-1


// -----------
// Write a function pluck() that extracts a list of
// values associated with property names.
// -----------
//note: JavaScript's map has to have a dot notation

function pluck(list, propertyName) {
    var result = list.map(function (a) {return a[propertyName];});
    return result;
}

// tests
// ---
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.assert(pluck(stooges, 'name')[0] === 'moe');
console.assert(pluck(stooges, 'age')[2] === 60);

// -----------
// Write a function reject() that does the opposite of filter,
// if the callback function returns a "truthy" value then that
// item is **not** inserted into the new collection,
// otherwise it is.
// -----------
function reject(list, predicate) {
    var returnArray [];
    list.filter(function (item) {
      var test = predicate(item);
      if (!test ) {returnArray.push(item);}
    });
    return returnArray;
}

// OR:

function reject(list, callback) {
    return list.filter(function (item) {
      var test = callback(item);
      if (!test) {return true;}  //or return !test;
    });
}


// tests
// ---
var lt10 = [0,1,2,3,4,5,6,7,8,9,10];
var odds = reject(lt10, function(n){ return n%2 === 0; });
console.assert(odds[0] === 1);
console.assert(odds[1] === 3);
console.assert(odds[4] === 9);

// -----------
// Write a function find() that returns the very first item
// in a collection when the callback function returns true;
// otherwise returns undefined.

function find(list, predicate) {
        return list.reduce (function (a,v) {
        var test = predicate(a, v);
        if (test) { return a;} else {return "undefined";}
    });
}

// tests
// ---
var people = [
    {name: "Matt", teaches: "JS"},
    {name: "Jwo", teaches: "Ruby"},
    {name: "Dorton", teaches: "life"}
];
var JS = find(people, function(n){ return n.teaches === "JS"; });
console.assert(JS.name === "Matt");

// -----------
// Write a function where() that filters for all the values
// in the properties object.
// -----------
function where(list, properties) {
    return list.filter(function (item) { //one line of list
        var allpasses = true;
        var passes = false;
        for(var prop in properties) {  //checks each property
          if(item[prop] === properties[prop]) {
              passes = true;
          }
          if (!passes) {allpasses = false;}
          passes = false;
        }
      return allpasses;
      }
  );
  }


// tests
// ---
var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

var sh8spr = where(plays, {author: "Shakespeare"});
console.assert(sh8spr instanceof Array);
console.assert(sh8spr.length === 5);
console.assert(sh8spr[0].title === "Cymbeline");

sh8spr = where(plays, {author: "Shakespeare", year: 1611});
console.assert(sh8spr.length === 0);

sh8spr = where(plays, {author: "Shakespeare", year: 1623});
console.assert(sh8spr.length === 2);

var midcentury = where(plays, {year: 1949});
console.assert(midcentury.length === 2);
