import React from "react";
import {MenuItemProps} from "./menuItem";

export interface SubMenuProps {
    index?:string

}

const MenuSub:React.FC<SubMenuProps>  = (props)=> {
    const {children,index: a} = props
    const renderChildren = ()=>{
        return React.Children.map(children, (value,index) => {
            const childElement = value as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            console.log('childElement',childElement)
            if(displayName === 'menuItem'){
                return React.cloneElement(childElement,{index:` ${a}-${ index.toString()}`})
            }else {
                console.error('error')
            }
        })
    }
    return <div>
        {
            renderChildren()
        }
    </div>

}

MenuSub.displayName = 'MenuSub'
export default MenuSub;
