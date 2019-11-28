// Scope Difference


var a = 1;
let b = 2;
const c = 3;

for(var a=1; a<10;a++)
{
    let b = 10;
    const c = 100;
    console.log(`Within for Loap ${a}, ${b}, ${c}`);
}

console.log(`Global Scope ${a}, ${b}, ${c}`);
