export interface Storage {
	getItem(key: string): string;
	setItem(key: string, value: string): void;
}

export declare class PersistenceStorage {
	constructor(storage: Storage);

	getItem(key: string): Promise<object>;
	setItem(key: string, value: any): Promise<object>;
}
