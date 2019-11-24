// Tip Calculator

var tips=[];
var finalBills=[];

function calculateTip(billAmount)
{
    switch(true){
        case billAmount<50:
            return billAmount * 0.20;
        case billAmount >=50 && billAmount <200:
            return billAmount * 0.15;
        case billAmount >=200:
            return billAmount * 0.10;
    }
}

var finalBill = function(billAmount,firstName)
{
    var tip = calculateTip(billAmount);
    console.log('Tip is ' +tip);
    tips.push(tip);
    finalBills.push(tip+billAmount);
}

finalBill(23,'Harsh');
finalBill(55,'shah');
finalBill(234,'hemedra');

console.log(tips,finalBills)
