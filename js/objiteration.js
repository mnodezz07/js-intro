class Student {
    constructor(name, age, email, course) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const john = new Student(
    "John Doe",
    21,
    "jd@gmail.com",
    "Data Science"
);
// console.log(john.name);
// console.log(john.age);
// console.log(john.email);
// console.log(john.course);

//for...in()
for (let key in john) {
    console.log(john[key]);
}

//Object.keys()
Object.keys(john).forEach(propertyName => console.log(propertyName));

//Objects.values()
Object.values(john).forEach(value => console.log(value));

//Object.entries()
console.log(Object.entries(john));
