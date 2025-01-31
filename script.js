// Step 2: If-else Condition

let number = -200; // Assign any number here
 
if (number > 10) {
  console.log('number is greater than 10')

} else if (number > 5) {
    console.log('number is smaller than 10 but bigger than 5')

} else if (number > 1 ){
    console.log('number is bigger than 1 but smaller than 5')

} else if (number > 0 ){
    console.log ("number is bigger than 0 but smaller than 1");
}
 else if (number == 0 ){
    console.log ("number is 0");
}else {
    console.log('number is smaller than zero and is negative number')
}

//Step 3: Switch Statement

let day = '2';

switch (day) {
    case 1:
        console.log('Sunday')
        break;

    case 2:
        console.log('Monday')
        break;

    case 3:
        console.log('Tuesday')
        break;
    
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    
    case 6:
        console.log('Friday')
        break;
    
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('Unknown day')
}

// Step 4: Loops (For, While, Do...While)

for (let i = 1; i <= 5; i++) {
    console.log (i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

//break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;  // Exit loop when i is 3
    }
    console.log(i);
}
//continue example
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skip when i is 3
    }
    console.log(i);
}

// Step 6: Scope and Context

let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar)
    console.log(localVar)
}

scopeExample();
console.log(globalVar);
// console.log(localVar) - variable is not accessible outside the function.
