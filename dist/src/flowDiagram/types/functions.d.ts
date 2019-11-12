/// <reference types="react" />
import { DraggableData } from 'react-draggable';
import { INode, IPort } from './chart';
import { IConfig } from './config';
import { IOffset, IPosition, ISize } from './generics';
export declare type IOnDragNode = (input: {
    config?: IConfig;
    event: MouseEvent;
    data: DraggableData;
    id: string;
}) => void;
export declare type IOnDragCanvas = (input: {
    config?: IConfig;
    event: MouseEvent;
    data: DraggableData;
}) => void;
export declare type IOnPortPositionChange = (input: {
    config?: IConfig;
    node: INode;
    port: IPort;
    el: HTMLDivElement;
    nodesEl: HTMLDivElement | IOffset;
}) => void;
export interface IOnLinkBaseEvent {
    config?: IConfig;
    linkId: string;
    startEvent: React.MouseEvent;
    fromNodeId: string;
    fromPortId: string;
}
export declare type IOnLinkStart = (input: IOnLinkBaseEvent) => void;
export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
    toPosition: {
        x: number;
        y: number;
    };
}
export declare type IOnLinkMove = (input: IOnLinkMoveInput) => void;
export declare type IOnLinkCancel = (input: IOnLinkBaseEvent) => void;
export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
    toNodeId: string;
    toPortId: string;
}
export declare type IOnLinkComplete = (input: IOnLinkCompleteInput) => void;
export declare type IOnLinkMouseEnter = (input: {
    config?: IConfig;
    linkId: string;
}) => void;
export declare type IOnLinkMouseLeave = (input: {
    config?: IConfig;
    linkId: string;
}) => void;
export declare type IOnLinkClick = (input: {
    config?: IConfig;
    linkId: string;
}) => void;
export declare type IOnCanvasClick = (input: {
    config?: IConfig;
}) => void;
export declare type IOnDeleteKey = (input: {
    config?: IConfig;
}) => void;
export declare type IOnNodeClick = (input: {
    config?: IConfig;
    nodeId: string;
}) => void;
export declare type IOnNodeDoubleClick = (input: {
    config?: IConfig;
    nodeId: string;
}) => void;
export declare type IOnLabelDoubleClick = (input: {
    config?: IConfig;
    linkId: string;
}) => void;
export declare type IOnNodeSizeChange = (input: {
    config?: IConfig;
    nodeId: string;
    size: ISize;
}) => void;
export declare type IOnCanvasDrop = (input: {
    config?: IConfig;
    data: any;
    position: IPosition;
}) => void;
