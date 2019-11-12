/// <reference types="react" />
import { IConfig, IOnCanvasClick } from '../../';
export interface ICanvasInnerDefaultProps {
    config: IConfig;
    children: any;
    onClick: IOnCanvasClick;
    tabIndex: number;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}
export declare const CanvasInnerDefault: any;
