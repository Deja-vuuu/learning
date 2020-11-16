import React from 'react';
import classnames from 'classnames'


export enum ButtonSize {
    Large='ls',
    Small = 'small'
}

export enum ButtonType {
    Primary='primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
interface BaseButtonProps {
    className?:string,
    disabled?:boolean,
    size?:ButtonSize,
    btnType?:ButtonType,
    children: React.ReactChild

}
const Button: React.FC<BaseButtonProps> = (props)=>{
    const {btnType, children}  = props;
    let cl = classnames('btn', {
        [`btn-${btnType}`]: btnType
    })
    return <div className={cl}>{children}</div>
}
Button.defaultProps ={
    children: 'ccc',
    btnType: ButtonType.Default
 }
export default Button;
