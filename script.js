person1 = {
    name: "SpongeBob",
    favFood: "HamBurger",
    sayHello: () => {console.log(`${person1.name} Says Hello`)}, //this keyword works only with function expression , if we want to use arrow function we will have to use person1.name
    eat: () => {console.log(`${person1.name} eats his Favfood which is ${person1.favFood}`)}
}
person1.eat();