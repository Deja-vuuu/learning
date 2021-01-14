import React, {useContext} from "react";
import { MenuContext } from './menu'
import classNames  from "classnames";

export interface MenuItemProps{
    index?:string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}
const MenuItem:React.FC<MenuItemProps> =(props)=>{
    const context = useContext(MenuContext)
    const {children,index} = props;
    const className = classNames('item',
        {
        'act': context.index === index
    })
    return <div
        className={className}
        onClick={()=>{
            context.onSelect && typeof (index)==='string' && context.onSelect(index)
    }}>{children}</div>
}
MenuItem.defaultProps = {
    index: '0',
}
MenuItem.displayName = 'menuItem'


export default MenuItem;
