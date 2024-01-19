import { createCustomer } from './functions';
import { Author, Book } from './interfaces';

type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'numBooksPublished'>;
type СreateCustomerFunctionType = typeof createCustomer;
type fn = (a: string, b: number, c: boolean) => symbol;

type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type BookUnionPropertiesTupe = Book[keyof Book]; // type BookUnionPropertiesTupe = string | number | boolean

interface BookWithReadonly {
    id: number;
    title: string;
    available?: boolean;
}

type RequiredProps<T> = {
    [property in keyof T]: {} extends Pick<T, property> ? never : property;
}[keyof T];

type OptionalProps<T> = {
    [property in keyof T]: {} extends Pick<T, property> ? property : never;
}[keyof T];

type BooksReadonlyProperties = OptionalProps<BookWithReadonly>;

export { BookRequiredFields, UpdatedBook, AuthorWoEmail, СreateCustomerFunctionType };
