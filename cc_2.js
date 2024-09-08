//coding project 2

//part 1

function calculateTip(bill) {
    let tipAmnt = (bill >= 50 && bill <= 300) ? 0.15: 0.20;
    let tip = bill * tipAmnt;
    return tip
} 

//part 2

let bill = 140;
console.log('The bill is:', bill);

let tip = calculateTip(bill);
console.log('The tip for this bill is:', tip);

console.log('The bill total with tip is:', bill + tip);

//part 3

//I already made a function for part 1, putting in this note to show I acknowledge part 3 but have already done it.

//part 4

let bills = [275, 40, 430];

let tips = bills.map(bill => calculateTip(bill));

let totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bills:",bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

