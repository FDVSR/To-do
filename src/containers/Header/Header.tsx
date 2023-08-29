import React from 'react';
import './Header.scss';
import { HeaderProps } from './types';

export default function Header({ title, children }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}
