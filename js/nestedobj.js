// nested objects

const john = {
    name: "John Doe",
    age: 32,
    skills: ["HTML", "CSS", "Javascript"]
};

//john.skills.forEach(skill => console.log(skill));

for (let key in john) {
    console.log(john[key]);
}
