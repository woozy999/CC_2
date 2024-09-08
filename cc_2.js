//coding project 2

//part 1

function calculateTip(bill) {
    let tipAmnt = (bill >= 50 && bill <= 300) ? 0.15: 0.20;
    let tip = bill * tipAmnt;
    return tip
} 
