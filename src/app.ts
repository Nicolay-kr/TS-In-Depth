import Encyclopedia from './encyclopedia';
import { Category } from './enums';
import { showHello, createCustomerID, printRefBook } from './functions';
import { Book, Author, A, Person, TOptions, Logger, Librarian } from './interfaces';
import { BookOrUndefined, BookProperties, PersonBook } from './types';
import RefBook from './encyclopedia';
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

// Task 02.01

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category?: Category;
// };

let library = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
] as const;

// console.log(calcTotalPages());

// Task 03.01.

const myID: string = createCustomerID('Ann', 10);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}/${id}`;
// console.log(idGenerator('Boris', 20));

// Task 03.02. Optional, Default and Rest Parameters

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// const myBooks = сheckoutBooks('Ann', 1, 2, 3);
// console.log(myBooks);

// Task 03.03. Function Overloading

// let checkedOutBooks: string[] = getTitles(true);
// console.log(checkedOutBooks);

// Task 03.04. Assertion Functions

// console.log(bookTitleTransform('home'));
// console.log(bookTitleTransform(1));

// Task 04.01. Defining an Interface

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

let logDamage: Logger = reason => console.log(`Damaged: ${reason}`);
// logDamage('error');

// Task 04.03. Extending Interface

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

// console.log(getProperty(myBook,'title'));
// console.log(getProperty(myBook,'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01. Creating and Using Classes

// const ref = new ReferenceItem(1, 'mytitle', 2023);
// console.log(ref);
// ref.publisher = 'new publisher';
// console.log(ref.publisher);
// console.log(ref.);

// Task 05.02. Extending Classes

const refBook = new RefBook(12, 1, 'mytitle', 2025);

refBook.printItem();

// Task 05.03. Creating Abstract Classes

// Task 05.04. Interfaces for Class Types

// const favoriteLibrarian: Librarian & A = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('petr','New Title');
// favoriteLibrarian.a

// Task 05.05. Intersection and Union Types

// type general =
// let person: PersonBook = {
//     author: 'bob',
//     available: true,
//     name: 'Anna',
//     email: 'test',
//     id: 1,
//     title: 'MyBook',
// };

// /// <reference path="utility-functions.ts" />

// const result1 = Utility.maxBooksAllowed(5);

// console.log(result1);

// import util = Utility.Fees;
// const result2 = util.calculateLateFee(1);
// console.log(result2);

// Task 06.03. Default Export

printRefBook(new RefBook(12, 1, 'mytitle', 2025));
