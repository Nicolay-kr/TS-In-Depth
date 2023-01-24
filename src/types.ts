import { Book, Person } from './interfaces';

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};
