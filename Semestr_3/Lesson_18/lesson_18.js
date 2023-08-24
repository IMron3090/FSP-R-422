// let numbers = [];

// console.log(numbers);

// let counterTwo = 4;

// while (counterTwo < 4) {
//  console.log(counterTwo);
// counterTwo++; 1 -> 2 -> 3 -> 4
// }

// let countString = "";
// let i = 0;
// do {
// i++; 1 2 3 4 5
// countString = countString + 1;
// } while (i < 5);

// console.log(countString); 1234 12345
// console.log(1); 6

// for (const num of "Imran"){
    // console.log(num);
// }

// for (let counter = 0; counter < 10; counter++){
// numbers.push(counter);
// }

// let name = prompt("Enter name");
// console.log(name);
// let last_name = promt("Enter last_name")
// console.log(last_name);

const spaceship = {
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032,
    },
    crew: {
      captain: {
        name: "Sandra",
        degree: "Computer Engineering",
        encourageTeam() {
          console.log("We got this!");
        },
      },
    },
    engine: {
      model: "Nimbus2000",
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD",
      },
      "back-up": {
        battery: "Lithium",
        terabytes: 50,
      },
    },
  };

  spaceship.crew.captain.encourageTeam();