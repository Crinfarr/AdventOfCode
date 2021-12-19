const fs = require('fs');

console.log("part 1");
let data = fs.readFileSync('./input').toString().split('\r\n');
let last = data[0];
let drops = 0;

for (let i = 1; i <= data.length; i++) {
    let num = data[i];
    if (parseInt(num) > parseInt(last)) drops++;
    last = num;
    process.stdout.write(drops + '\r');
}
process.stdout.write('\n');

console.log('part 2');

data = fs.readFileSync('./input').toString().split('\r\n');
data.forEach(str => {
    data[data.indexOf(str)] = parseInt(str);
});
last = data[0] + data[1] + data[2];
drops = 0;
for (let i = 1; i <= data.length - 3; i++) {
    if (data[i] + data[i + 1] + data[i + 2] > last) drops++;
    last = data[i] + data[i + 1] + data[i + 2];
    process.stdout.write(drops + '\r');
}
process.stdout.write('\n');