/// <reference types="react" />
import { IConfig, INode } from '../../';
export interface INodeInnerDefaultProps {
    config: IConfig;
    node: INode;
}
export declare const NodeInnerDefault: ({ node }: INodeInnerDefaultProps) => JSX.Element;
