import * as React from 'react';
import { IConfig, ILink, INode, IOnLinkCancel, IOnLinkComplete, IOnLinkMove, IOnLinkStart, IOnPortPositionChange, IPort, IPosition, ISelectedOrHovered } from '../../';
import CanvasContext from '../Canvas/CanvasContext';
import { IPortDefaultProps } from './Port.default';
export interface IPortWrapperProps {
    config: IConfig;
    style?: object;
    offset: IPosition;
    selected: ISelectedOrHovered | undefined;
    hovered: ISelectedOrHovered | undefined;
    selectedLink: ILink | undefined;
    hoveredLink: ILink | undefined;
    port: IPort;
    node: INode;
    onPortPositionChange: IOnPortPositionChange;
    Component: React.FunctionComponent<IPortDefaultProps>;
    onLinkStart: IOnLinkStart;
    onLinkMove: IOnLinkMove;
    onLinkCancel: IOnLinkCancel;
    onLinkComplete: IOnLinkComplete;
}
export declare class PortWrapper extends React.Component<IPortWrapperProps> {
    static contextType: React.Context<{
        offsetX: number;
        offsetY: number;
    }>;
    context: React.ContextType<typeof CanvasContext>;
    private nodeRef;
    componentDidUpdate(prevProps: IPortWrapperProps): void;
    onMouseDown: (startEvent: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
}
