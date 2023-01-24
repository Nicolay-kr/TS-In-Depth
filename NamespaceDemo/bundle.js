var Utility;
(function (Utility) {
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            // add a new member
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function privateFunc() {
        console.log('This is a private');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result1 = Utility.maxBooksAllowed(5);
console.log(result1);
var util = Utility.Fees;
var result2 = util.calculateLateFee(1);
console.log(result2);
