import * as React from 'react';
import { INode } from '../';
export interface IOuterProps {
    className: string;
    draggable: boolean;
    itemStyle: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}
export interface ISidebarItemProps {
    type: string;
    ports?: INode['ports'];
    properties?: any;
    itemStyle?: string;
}
export declare const SidebarItem: ({ type, ports, properties, itemStyle }: ISidebarItemProps) => JSX.Element;
