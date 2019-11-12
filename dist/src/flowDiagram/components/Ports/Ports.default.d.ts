import * as React from 'react';
import { IConfig } from '../../';
export interface IPortsDefaultProps {
    config: IConfig;
    children: Array<React.ReactElement<any>>;
}
export declare const PortsDefault: ({ children, config }: IPortsDefaultProps) => JSX.Element;
