import React, { FC } from 'react';
import tw from 'tailwind-styled-components';

export interface ButtonProps {
    /** Prop comment */
    prop: string;
}

/** Comment */
export const Button: FC<ButtonProps> = ({prop}: ButtonProps) => {

    return (
        <div>Button component {prop}</div>
    );
};
