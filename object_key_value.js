const bottle = { color: 'blue', isCleaned: true, price: 50, capacity: 2 };

// key access of any object
const keys = Object.keys(bottle);
console.log(keys);

//get value of any object
const value = Object.values(bottle);
console.log(value);

//get pair of property and value
const pair = Object.entries(bottle);
console.log(pair);

//seal will lock the property you can update  value but can't delete and can't add
Object.seal(bottle);
delete bottle.isCleaned;
bottle.isCleaned = false;
bottle.height = 200;
console.log(bottle);

//using freeze property and value will be locked nothing can be changed
Object.freeze(bottle);
bottle.color = 'green';
console.log(bottle);
