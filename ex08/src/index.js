// Only change code below this line
function logicalOrOperator(num) {
    if(num >= 20 || 20 <= num <= 30) {
        return "In";
    }
    return "Out";
}
console.log(logicalOrOperator(30));
// Only change code above this line

module.exports = logicalOrOperator;