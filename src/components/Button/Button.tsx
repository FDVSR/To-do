import React from 'react';
import './Button.scss';
import { ButtonProps } from './types';

export default function Button({ children }: ButtonProps) {
    return <button type="button">{children}</button>;
}
