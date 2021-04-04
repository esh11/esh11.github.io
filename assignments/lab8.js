function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function () {
            return i;
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
console.log(army[8]());

// second option to fix the error
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function () {
            return i;
        };
        shooters.push(shooter());
        i++;
    }
    return shooters;
}
let army = makeArmy();
console.log(army[8]);



