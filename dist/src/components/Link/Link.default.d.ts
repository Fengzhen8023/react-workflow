/// <reference types="react" />
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLabelDoubleClick, IPosition } from '../../';
export interface ILinkDefaultProps {
    config: IConfig;
    link: ILink;
    startPos: IPosition;
    endPos: IPosition;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    onLabelDoubleClick: IOnLabelDoubleClick;
    isHovered: boolean;
    isSelected: boolean;
    isAllowAddLinkLabel: boolean;
}
export declare const LinkDefault: ({ config, link, startPos, endPos, onLinkMouseEnter, onLinkMouseLeave, onLabelDoubleClick, onLinkClick, isHovered, isSelected, isAllowAddLinkLabel }: ILinkDefaultProps) => JSX.Element;
