const student = {
    name: 'moyna',
    address: 'dhaka',
    money: 55000,
    subject: ['cse', 'math', 'english', 'psycology'],
    exam: function () {
        return this.name + ' ' + 'is participating in' + ' ' + this.subject[0]
    },
    improveExam: function (subject) {
        //a  method can be called in another method
        const exam = console.log(this.exam());
        const statement = `${this.name} is taking improvement exam on ${subject}`
        return exam, statement;

    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }

}

// to call method we have to use objectName.method()
// if function have any return then we have to call method in another variable
const output = student.exam();
// console.log(output)

const output1 = student.improveExam('bangla');
console.log(output1);

const savedMoney = student.treatDey(600, 50);
console.log('saved money', savedMoney);