namespace Utility {
    export function maxBooksAllowed(age: number) {
        return age < 12 ? 3 : 10;
    }
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            // add a new member
            return daysLate * 0.25;
        }
    }
    function privateFunc(): void {
        console.log('This is a private');
    }
}
