/// <reference types="react" />
export interface IInputProps {
    value: string;
    type: string;
    onChange: (e: any) => void;
}
export declare const Input: ({ value, type, onChange }: IInputProps) => JSX.Element;
