var faker = require("faker");  

function generateRandomInfo(){ 
    console.log(faker.internet.email());
    console.log(faker.date.past());
    console.log(faker.commerce.price());
    console.log(faker.finance.account());
    console.log(faker.hacker.phrase());
    console.log(faker.image.imageUrl());
    console.log(faker.internet.userName());
    console.log(faker.lorem.sentence());
    console.log(faker.name.jobTitle());
}

function generateInfo(){
    console.log(faker.name.firstName() + " " + faker.name.lastName() + " is a " + faker.name.jobTitle() + ".");
}

generateInfo();