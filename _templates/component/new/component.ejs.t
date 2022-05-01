---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.tsx
---
import React, { FC } from 'react';
import tw from 'tailwind-styled-components';

export interface <%= h.capitalize(name) %>Props {
    /** Prop comment */
    prop: string;
}

/** Comment */
export const <%= h.capitalize(name) %>: FC<<%= h.capitalize(name) %>Props> = ({prop}: <%= h.capitalize(name) %>Props) => {

    return (
        <div><%= h.capitalize(name) %> component {prop}</div>
    );
};
