import React from 'react';
import * as SolidIcons from  'react-icons/fa';

export type IconName = keyof typeof SolidIcons;

interface IconProps {
    icon?: IconName;
    className?: string;
    outline?: boolean;
}

export const Icon = ({
    icon,
    className = 'w-6 h-6 text-gray-600',
    outline
}: IconProps): JSX.Element | null => {
    if (!icon) return null;
    const Icon = SolidIcons[icon];
    return Icon ? <Icon className={className} /> : null;
};