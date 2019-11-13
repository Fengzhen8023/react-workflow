import { IPosition } from './types/generics';
export declare const noop: () => null;
export interface ILabelPosition {
    centerX: number;
    centerY: number;
}
export declare const generateLabelPosition: (startPos: IPosition, endPos: IPosition) => ILabelPosition;
