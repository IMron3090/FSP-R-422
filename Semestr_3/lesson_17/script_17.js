function userinfo(name,psw = "secret"){
    //console.log(Your name is $(name) with psw: $(psw)')
    //  Your name is $(name) with psw: $(psw)'
    // Your name is Imran with psw: ******'
// return 'Your name is $(name) with psw: $(psw)';
secret_psw = "";
for(let i = 0; i < psw.leight; i ++){
    secret_psw += "*";
}

}
// result = userinfo("Imran");
console.log(userinfo("Imran"));

// function multiply(a, b){
// return a * b;
// }
// function doManymultiply(a, b){
// a * b;
// a * b;
// return a * b;
// }

// Functions Expressions
(function (day) {
    if(day === "Wednesday"){
        return true;
    } 
return false;
});

const IsWednesday = function (day) {
    if (day === "Wednesday"){
        return true;
    }
    return false;
};

console.log(IsWednesday("Wednesday"));

// Arrow functions
const rectangleArea = (width, height) => {
    let area = width * height;
    return area; 
};

// const dummy = (singleParam) => singleParam +2;
const dummy = (singleParam) =>{
if (singleParam){
    return true;
}
};
console.log(dummy(12));


var name = "Imran"; // global
let lastname = "Something";
const age = 12;

if (true) {
    let last_name = "test_2";
    const age = 32;
    console.log(last_name, age);
}

console.log(last_name, age);