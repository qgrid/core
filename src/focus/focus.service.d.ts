import { Model } from '../infrastructure/model';
import { Table } from '../dom/table';
import { Disposable } from '../infrastructure/disposable';

export declare class FocusService {
    constructor(model: Model);

    activate(rowIndex?: number, columnIndex?: number);
}

export declare class FocusAfterRenderService extends Disposable {
    constructor(model: Model, table: Table);
}