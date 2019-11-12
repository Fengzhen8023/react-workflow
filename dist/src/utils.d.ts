export declare const noop: () => null;
export interface ILabelPosition {
    centerX: number;
    centerY: number;
}
export interface INodePos {
    nodeHeight: number;
    nodeWidth: number;
    portType: string;
    x: number;
    y: number;
}
export declare const generateLabelPosition: (startPos: INodePos, endPos: INodePos) => ILabelPosition;
