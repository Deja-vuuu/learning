import React, {useContext} from "react";
import { MenuContext } from './index'
import classNames  from "classnames";

export interface MenuItemProps{
    index:number;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}
const MenuItem:React.FC<MenuItemProps> =(props)=>{
    const context = useContext(MenuContext)
    const {children,index} = props;
    const className = classNames('item',{
        'act': context.index === index
    })
    return <div
        className={className}
        onClick={()=>{
        context.onSelect(props.index)
    }}>{children}</div>
}
MenuItem.defaultProps = {
    // index: 0,
}
export default MenuItem;
