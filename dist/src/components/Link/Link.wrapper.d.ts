import * as React from 'react';
import { IConfig, ILink, INode, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLabelDoubleClick } from '../../';
import { ILinkDefaultProps } from './Link.default';
export interface ILinkWrapperProps {
    config: IConfig;
    link: ILink;
    linkLabel: string;
    isSelected: boolean;
    isHovered: boolean;
    isAllowAddLinkLabel: boolean;
    fromNode: INode;
    toNode: INode | undefined;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLabelDoubleClick: IOnLabelDoubleClick;
    onLinkClick: IOnLinkClick;
    Component?: React.FunctionComponent<ILinkDefaultProps>;
}
export declare const LinkWrapper: React.MemoExoticComponent<({ config, Component, link, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, onLabelDoubleClick, isAllowAddLinkLabel, isSelected, isHovered, fromNode, toNode, }: ILinkWrapperProps) => JSX.Element | null>;
