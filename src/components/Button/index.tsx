import React from 'react';
import classNames from 'classnames';
import { ENOEXEC } from 'constants';


export enum ButtonSize {
    Large = 'ls',
    Small = 'small'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    href?: string,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactChild

}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })
    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}
Button.defaultProps = {
    children: 'ccc',
    btnType: ButtonType.Default
}
export default Button;
