import * as Interfaces from './interfaces';

abstract class ReferenceItem {
    // title: string;
    // year: number;
    static department: string = 'research dep';
    private _publisher: string;
    #id: number;

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;

        // this.title = newTitle;
        // this.year = newYear;
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID(): number {
        return this.#id;
    }
    printItem() {
        // console.log(depa);
        console.log(`${this.title} was published in ${this.year}`);
    }
    abstract printCitation(): void;
}

class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    department: string;
    name: string;
    email: string;
    a: number;
    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}

export { UniversityLibrarian, ReferenceItem };
