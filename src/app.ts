/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01

type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};
// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category?: Category;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category?: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

function getAllBooks(): Book[] {
    let books = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.TypeScript,
        },
    ];
    return books;
}

function logFirstAvailable(books: Book[] = getAllBooks()): void {
    let booksQuantity = books.length;
    let firstAvailibleBook = books.find(book => book.available).title;
    console.log(booksQuantity, firstAvailibleBook);
}
function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(({ title }) => title);
}
function logBookTitles(booksTitle: string[]): void {
    console.log(booksTitle.toString());
}
function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()[index];
    return [title, author];
}
let library = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
] as const;

function calcTotalPages(): BigInt {
    return library
        .map(({ books, avgPagesPerBook }) => BigInt(books) * BigInt(avgPagesPerBook))
        .reduce((prev, next) => prev + next, 0n);
}
// console.log(calcTotalPages());

// Task 03.01.

function createCustomerID(name: string, id: number): string {
    return `${name}/${id}`;
}

const myID: string = createCustomerID('Ann', 10);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}/${id}`;
// console.log(idGenerator('Boris', 20));

// Task 03.02. Optional, Default and Rest Parameters

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`${name}`);
    if (age) {
        console.log(`$${age}`);
    }
    if (city) {
        console.log(`$${city}`);
    }
}
// console.log(getBookTitlesByCategory());
// logFirstAvailable();

function getBookByID(id: Book['id']): BookOrUndefined{
    // let findCallbackType: (id: number) => boolean;
    // let findCallback: typeof findCallbackType = ids => {
    //     return ids === id;
    // };
    return getAllBooks().find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    let titles = bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

    return titles;
}

// const myBooks = сheckoutBooks('Ann', 1, 2, 3);
// console.log(myBooks);

// Task 03.03. Function Overloading

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
// function getTitles(...args: any[]): string[] {
function getTitles(...args: unknown[]): string[] {
    if (args.length === 1) {
        if (typeof args[0] === 'string') {
            const author = args[0];
            return getAllBooks()
                .filter(book => book.author === author)
                .map(({ title }) => title);
        } else if (typeof args[0] === 'boolean') {
            const available = args[0];
            return getAllBooks()
                .filter(book => book.available === available)
                .map(({ title }) => title);
        }
    } else {
        return getAllBooks()
            .filter(book => book.available === args[1] && book.id === args[0])
            .map(({ title }) => title);
    }
}

// let checkedOutBooks: string[] = getTitles(true);
// console.log(checkedOutBooks);

// Task 03.04. Assertion Functions

function assertStringValue(condition: any): asserts condition {
    if (!condition) {
        throw new TypeError('value should have been a string');
    }
}
function bookTitleTransform(title: any): string {
    assertStringValue(typeof title === 'string');
    return title.split('').reverse().join('');
}
// function assertStringValue(val: any): asserts val is string {
//     if (typeof val !== 'string') {
//         throw new TypeError('value should have been a string');
//     }
// }
// function bookTitleTransform(title: any): string {
//     assertStringValue(title);
//     return title.split('').reverse().join('');
// }
// console.log(bookTitleTransform('home'));
// console.log(bookTitleTransform(1));

// Task 04.01. Defining an Interface

function printBook(book: Book): string {
    return `${book.title} by ${book.author}`;
}

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`),
};
// console.log(myBook.markDamaged('missing back cover'));

// printBook(myBook);

// Task 04.02. Defining an Interface for Function Types

interface DamageLogger {
    (param: string): void;
}

let logDamage: DamageLogger = reason => console.log(`Damaged: ${reason}`);
// logDamage('error');

// Task 04.03. Extending Interface
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}
let favoriteAuthor: Author = {
    name: 'Ivan',
    email: 'test@test.com',
    numBooksPublished: 200,
};
// let favoriteLibrarian: Librarian = {
//     name: 'Ivan',
//     email: 'test@test.com',
//     department: 'education',
//     assistCustomer: (custName, bookTitle) => console.log(`${custName} ${bookTitle}`),
// };

// Task 04.04. Optional Chaining

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05. Keyof Operator

type BookProperties = keyof Book;

function getProperty(book: Book, bookProperties: BookProperties | 'isbn') {
    const value = book[bookProperties];
    return typeof value === 'function' ? value.name : value;
}
// console.log(getProperty(myBook,'title'));
// console.log(getProperty(myBook,'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01. Creating and Using Classes

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
// const ref = new ReferenceItem(1, 'mytitle', 2023);
// console.log(ref);
// ref.publisher = 'new publisher';
// console.log(ref.publisher);
// console.log(ref.);

// Task 05.02. Extending Classes

class Encyclopedia extends ReferenceItem {
    constructor(public edition: number, id: number, title: string, year: number) {
        super(id, title, year);
    }
    override printItem(): void {
        super.printItem();
        console.log(`Edition: edition ${this.year}`);
    }
    printCitation(){
        return 'string';
    };
}

const refBook = new Encyclopedia(12, 1, 'mytitle', 2025);

refBook.printItem();

// Task 05.03. Creating Abstract Classes


// Task 05.04. Interfaces for Class Types

interface A{
    a: number;
}

class UniversityLibrarian implements Librarian, A{
    department: string;
    name: string;
    email: string;
    a: number;
    assistCustomer(custName: string, bookTitle: string): void{
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

}

// const favoriteLibrarian: Librarian & A = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('petr','New Title');
// favoriteLibrarian.a

// Task 05.05. Intersection and Union Types

type PersonBook = Person & Book;


// type general =
let person: PersonBook = {
    author:'bob',
    available: true,
    name:'Anna',
    email:'test',
    id:1,
    title:'MyBook',
};

type BookOrUndefined = Book|undefined;

interface TOptions{
    duration?: number;
    speed?: number;
}

function setDefaultConfig(options: TOptions): TOptions{
    options.duration ??= 200;
    options.speed ??= 300;
    return options;

}
/// <reference path="utility-functions.ts" />

const result1 = Utility.maxBooksAllowed(5);

console.log(result1);

import util = Utility.Fees;
const result2 = util.calculateLateFee(1);
console.log(result2);
