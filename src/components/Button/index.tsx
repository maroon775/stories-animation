import React from 'react';
import cx from 'classnames';
import s from './style.module.css';
const styles: Record<string, string> = s;

export interface IButtonProps {
    onClick?: () => void;
    type: 'circle'|'rounded';
    icon?: string;
}

interface IButtonIcon {
    icon: string
}

const ButtonIcon: React.FC<IButtonIcon> = ({icon}) => {
    return <img className={styles.button__image} src={icon} alt=''/>
}

export const Button: React.FC<IButtonProps> = ({children, type, icon, ...props}) => {
    return <button className={cx(styles.button, type ? styles[`button_${type}`] : '')} {...props}>
        {icon ? <ButtonIcon icon={icon}/> : children}
    </button>;
}
