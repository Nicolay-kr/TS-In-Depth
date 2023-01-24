import { Category } from './enums';
import { Book, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './encyclopedia';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books: Book[] = getAllBooks()): void {
    let booksQuantity = books.length;
    let firstAvailibleBook = books.find(book => book.available).title;
    console.log(booksQuantity, firstAvailibleBook);
}
export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(({ title }) => title);
}
export function logBookTitles(booksTitle: string[]): void {
    console.log(booksTitle.toString());
}
export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()[index];
    return [title, author];
}

export function calcTotalPages(library: any): BigInt {
    return library
        .map(({ books, avgPagesPerBook }) => BigInt(books) * BigInt(avgPagesPerBook))
        .reduce((prev, next) => prev + next, 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}/${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`${name}`);
    if (age) {
        console.log(`$${age}`);
    }
    if (city) {
        console.log(`$${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    // let findCallbackType: (id: number) => boolean;
    // let findCallback: typeof findCallbackType = ids => {
    //     return ids === id;
    // };
    return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    let titles = bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

    return titles;
    ``;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
// export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
// export function getTitles(...args: any[]): string[] {
export function getTitles(...args: unknown[]): string[] {
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

export function assertStringValue(condition: any): asserts condition {
    if (!condition) {
        throw new TypeError('value should have been a string');
    }
}
export function bookTitleTransform(title: any): string {
    assertStringValue(typeof title === 'string');
    return title.split('').reverse().join('');
}

export function printBook(book: Book): string {
    return `${book.title} by ${book.author}`;
}

export function getProperty(book: Book, bookProperties: BookProperties | 'isbn') {
    const value = book[bookProperties];
    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 300;
    return options;
}

export function assertCondition(condition: any): asserts condition {
    if (!condition) {
        throw new TypeError('It is not an instance of RefBook» ');
    }
}

export function printRefBook(data: any): void {
    assertCondition(data instanceof RefBook);
    data.printItem();
}
