/// <reference types="react" />
export interface Ioption {
    rGuid: string;
    rName: string;
}
export interface ISelectProps {
    optionList: Ioption[];
    value: string;
    onChange: (e: string) => void;
    children?: any;
}
export declare const Select: ({ optionList, value, onChange }: ISelectProps) => JSX.Element;
