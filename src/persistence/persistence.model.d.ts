import { Command } from '../command/command';
import { PersistenceStorage } from './persistence.storage';

/**
 * > Under construction
 */
export declare interface PersistenceModel {
	id?: string;
	defaultGroup?: string;
	storage?: PersistenceStorage;
	load?: Command;
	remove?: Command;
	create?: Command;
	modify?: Command;
	reset?: Command;
	setDefault?: Command;	
	settings?: { [key: string]: string[] };
}
