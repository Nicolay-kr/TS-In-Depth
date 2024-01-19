import { purge, getObjectProperty, createCustomer } from './functions';
import { Category } from './enums';
import { Author, Magazine } from './interfaces';
import { Shelf } from './clasees';
import { AuthorWoEmail, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
// import { getObjectProperty } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// console.log(purge(inventory));
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// function getObjectProperty<TObject extends object, TKey extends keyof TObject>(
//     obj: TObject,
//     key: TKey,
// ): TObject[TKey] | string {
//     return obj[key];
// }

// getObjectProperty(magazines[0], 'title');

// Task 7.4

const bookWithRequiredField: BookRequiredFields = {
    id: 10,
    title: 'The C Programming Language',
    author: 'K & R',
    available: true,
    category: Category.Software,
};

const updatedBook: UpdatedBook = {
    id: 10,
    title: 'The C Programming Language',
    available: true,
    category: Category.Software,
};

const autor: AuthorWoEmail = {
    email: 'some email',
    name: 'Ivan. I',
};

const cusstomerParameters: Parameters<СreateCustomerFunctionType> = [2, 'Ivan'];

console.log(createCustomer(...cusstomerParameters));
