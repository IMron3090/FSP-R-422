// let name = "Imran";
// this.a =  12;
// // console.log(this)

// const goat = {
//     dietType: "herbivore",
//     makeSound() {
//         console.log(this.dietType);
//     },
//     diet: () => {
//         console.log(this.a);
//         console.log(this.dietType);
//     },
// };

// goat.diet();
// goat.makeSound();

// const robot = {
//     _energyLevel: 100,
//     recharge(){
//         this._energyLevel +- 30;
//         console.log(`Recharged! Energy is currently at $(this._energyLevel)%.`)
//     },
// };

// robot._energyLevel = "high";
// robot.recharge();
// console.log(robot._energyLevel);

// const person = {
//     _firstName: "John",
//     _lastName: "Doe",
//     _age: 37,
// }
// // fullName: "Fracisco Buele"
// get fullName() {
//     if (this._firstName && this._lastName){
// return `${this._firstname && this._lastName}`;
//     }else{
//         return "Missing a first name or a lastname.";
//     }
//  }

// class CafeMenu {
//     _meal;
//     _price;
  
//     constructor(meal, price) {
//       this._meal = meal;
//       this._price = price;
//     }
  
//     get meal() {
//       return this._meal;
//     }
  
//     set meal(newMeal) {
//       this.#meal = newMeal;
//     }
  
//     get price() {
//       return this._price;
//     }
  
//     set price(newPrice) {
//       this._price = newPrice;
//     }
//   }
  
//   const menu = new CafeMenu("Cheeseburger", 12.99);
//   console.log(menu.meal); // "Cheeseburger"
//   console.log(menu.price); // 12.99
  
//   menu.meal = "Pizza";
//   menu.price = 15.99;
//   console.log(menu.meal); // "Pizza"
//   console.log(menu.price); // 15.99
  

