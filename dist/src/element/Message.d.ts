/// <reference types="react" />
import './animate.css';
export interface IMessageProps {
    errorInfo?: string;
    alertMessageStatus: string;
}
export declare const Message: ({ errorInfo, alertMessageStatus }: IMessageProps) => JSX.Element;
