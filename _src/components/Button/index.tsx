import React from 'react';

export interface IButtonProps {
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({children, ...props}) => {
    return <button {...props}>{children}</button>;
}
