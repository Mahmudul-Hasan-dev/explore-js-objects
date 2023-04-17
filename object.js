//object literals
const player = {};
player.name = 'reahana';
player.title = 'ghomes';
player.speciality = 'complexity'
console.log(player);

player.bat = function () {
    console.log('swing your bat')
}
console.log(player);
player.bat();


///object
const student = {
    name: 'pandey',
    job: 'restaurant work',
    ball: function () {
        console.log('write the task')
    }


}
console.log(student);
console.log(student.ball);
student.ball();


//3.create object
const person = new Object();



//object creation method
const atel = Object.create(student);
console.log(atel.name);

//using class
class Person {
    name = 'abul';
    place = 'sadarghat';
    constructor(age) {
        this.age = age;
    }

}

const person1 = new Person(26);
console.log(person1)

//using function
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car(2021, 100);
console.log(tesla)