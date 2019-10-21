import { PipeContext, PipeMemo } from './pipe.item';

/**
 * Applies client side filtration, utilizes `filter` model for getting input data and `expression builder` kit to support complex logic by invoking `match` function from filter state.
 */
export declare const filterPipe: (memo: any, context: PipeContext, next: (param: PipeMemo) => void) => any;
