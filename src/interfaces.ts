import { Category } from './enums';

interface Magazine {
    title: string;
    publisher: string;
}

interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}

interface ShelfItem {
    title: string;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

export { Book, Author, Magazine, ShelfItem };
