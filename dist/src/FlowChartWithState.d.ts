import * as React from 'react';
import { IChart, IConfig, IFlowChartComponents, IOnNodeDoubleClick, IOnLabelDoubleClick } from './';
export interface IFlowChartWithStateProps {
    initialValue: IChart;
    Components?: IFlowChartComponents;
    config?: IConfig;
    getWorkFlowChartValue?: (workFlowValue: any) => void;
    isAllowAddLinkLabel?: boolean;
    nodeRoleOptions: any[];
}
/**
 * Flow Chart With State
 */
export declare class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
    constructor(props: IFlowChartWithStateProps);
    state: IChart;
    onNodeDoubleClick: IOnNodeDoubleClick;
    onLabelDoubleClick: IOnLabelDoubleClick;
    private stateActions;
    hideModel: () => void;
    handleCancelEditNode: () => void;
    handleNameInput: (e: any) => void;
    handleDescriptionInput: (e: any) => void;
    handleLinkDescriptionInput: (e: any) => void;
    setNodeInfo: () => boolean;
    setLinkInfo: () => void;
    handleNodeRoleChange: (value: string) => void;
    renderAddNewNodeModel: () => JSX.Element;
    renderAddNewLinkModel: () => false | JSX.Element;
    warningMessage: (content: string) => void;
    renderAlertMessage: () => JSX.Element;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
