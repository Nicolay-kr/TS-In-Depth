function purge<T>(inventory: Array<T>): T[] {
    return inventory;
}

function getObjectProperty<TObject extends object, TKey extends keyof TObject>(
    obj: TObject,
    key: TKey,
): TObject[TKey] | string {
    return obj[key];
}

function createCustomer(id: number, name: string): string {
    return `${id} ${name}`;
}

export { createCustomer, purge, getObjectProperty };
