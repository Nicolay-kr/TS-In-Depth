import { ReferenceItem } from './classes';

export default class extends ReferenceItem {
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