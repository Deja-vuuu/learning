import React, {FC} from 'react';
import classNames from "classnames";
import './style.scss'


export interface IconProps{
    style: React.CSSProperties
    className: string
    type:string
}
type baseIconProps = Partial<IconProps>
const Icon:FC<baseIconProps> =(props)=>{
    const {style,className,type} = props
    const iconClassName = classNames('a',className)
    return <svg
        className={iconClassName}
        aria-hidden="true"
        style={style}
    >
        <use xlinkHref={`#${type}`}/>
    </svg>
}

export default Icon;
