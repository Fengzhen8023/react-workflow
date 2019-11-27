import * as React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
    height: 32px;
    line-height: 1.5;

    &.primary {
        background-color: #1890ff;
        border: 1px solid transparent;
        color: #fff;
    }

    &.cancel {
        background-color: #fff;
        border: 1px solid #1890ff;
        color: #1890ff;
    }

    display: inline-block;
    padding: 0 15px;
    margin-left: 1rem;
    outline: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    touch-action: manipulation;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    text-align: center;
    box-sizing: border-box;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045)
`

export interface IButtonProps {
    children?: string
    type?: string
    onClick: (e: any) => void
}

export const Button = ({ children="button", type="primary", onClick }: IButtonProps) => {
    return (
        <CustomButton onClick={onClick} className={type}>{ children }</CustomButton>
    )
}
