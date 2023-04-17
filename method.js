const student = {
    name: 'nahid',
    address: 'dhaka',
    money: 500000000,
    subject: ['cse', 'math', 'english', 'psycology'],
    exam: function () {
        //to call object property in method we have to use this.propertyName
        console.log(this.name, 'is participating in', this.subject[0])

        // to use array property with loop
        for (i = 0; i < this.subject.length; i++) {
            console.log(this.name, 'is participating in', this.subject[i])

        }
    }
}

// to call method we have to use objectName.method()
student.exam();