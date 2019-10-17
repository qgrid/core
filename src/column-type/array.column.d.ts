import { ColumnView } from '../scene/view/column.view';
import { DataColumnModel } from './data.column.model';
import { ColumnModel } from './column.model';

export declare class ArrayColumnModel extends DataColumnModel {
	itemType: string;
	itemFormat: string;
}

export declare class ArrayColumn extends ColumnView {
	constructor(model: ColumnModel);
}
