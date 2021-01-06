import React, {useState, createContext, ReactElement} from "react";
// import classNames  from "classnames";
import {MenuItemProps} from './menuItem'

type MenuMode = 'h' | 'v'
type SellectCallBack  = (selectIndex: number)=>void
export interface MenuProps{
    defaultIndex?:number;
    className: string;
    mode:MenuMode;
    style: React.CSSProperties;
    onSelect? :SellectCallBack;
    children? : React.ReactElement[]
    // children:React.ReactChild
}
interface IMenuContext{
    index: number;
    onSelect?:SellectCallBack
}
export const MenuContext = createContext<IMenuContext>({
    index: 1,
    // onSelect: ()=>{}
})
type BaseMenuProps = Partial<MenuProps>
const Menu:React.FC<BaseMenuProps> =(props)=>{
    const {defaultIndex,onSelect,children} = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const handlClick =(index:number)=>{
        setCurrentActive(index)
        onSelect && onSelect(index);
    }
    const passedContext = {
        index: currentActive? currentActive: 0,
        onSelect: handlClick
    }
    console.log(children && React.Children.toArray(children))
    console.log(children && React.Children)
    const renderChildren = ()=>{
        return React.Children.map(children, (value,index) => {
            const childElement = value as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            console.log('childElement',childElement)
            if(displayName === 'menuItem'){
               return React.cloneElement(childElement,{index})
           }else {
                console.error('error')
            }
        })
    }
    return <MenuContext.Provider value={passedContext}>
        {
            renderChildren()
        }
    </MenuContext.Provider>
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'h'
}
export default Menu;
