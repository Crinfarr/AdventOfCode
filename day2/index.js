const fs = require('fs');


console.log("part 1");
let input = fs.readFileSync('./input').toString().split('\n');
let h = 0;
let d = 0;

for (let i = 0; i < input.length; i++) {
    let command = input[i];
    let dir = command.split(' ')[0];
    let amp = parseInt(command.split(' ')[1]);
    switch (dir) {
        case 'forward':
            h += amp;
            break;
        case 'up':
            d -= amp;
            break;
        case 'down':
            d += amp;
            break;
    }
}
console.log(h * d);

console.log('\npart 2');
h = 0;
d = 0;
let aim = 0;
for (let i = 0; i < input.length; i++) {
    let command = input[i];
    let dir = command.split(' ')[0];
    let amp = parseInt(command.split(' ')[1]);
    switch (dir) {
        case 'up':
            aim -= amp;
            break;
        case 'down':
            aim += amp;
            break;
        case 'forward':
            h += amp;
            d += aim * amp;
            break;
    }
}
console.log(h * d);