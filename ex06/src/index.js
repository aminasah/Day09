// Only change code below this line
function comparisonToEqual(a) {
    if(a < 5) {
        return "Less than 5";

    }
    if(a < 10) {
        return "Less than 10";

    }
    if(a > 20) {
        return "More than 20";

    }
    if(a >= 10) {
        return "10 or over";
    }
    
}
console.log(comparisonToEqual(0));
// Only change code above this line

module.exports = comparisonToEqual;