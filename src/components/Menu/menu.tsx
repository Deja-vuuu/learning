import React, {useState, createContext, ReactElement} from "react";
// import classNames  from "classnames";
import {MenuItemProps} from './menuItem'

type MenuMode = 'h' | 'v'
type SellectCallBack  = (selectIndex: string)=>void
export interface MenuProps{
    defaultIndex?:string;
    className?: string;
    mode?:MenuMode;
    style?: React.CSSProperties;
    onSelect? :SellectCallBack;
    children? : React.ReactElement[]
    // children:React.ReactChild
}
interface IMenuContext{
    index: string;
    onSelect?:SellectCallBack
}
export const MenuContext = createContext<IMenuContext>({
    index: '0',
    // onSelect: ()=>{}
})
type BaseMenuProps = Partial<MenuProps>
const Menu:React.FC<BaseMenuProps> =(props)=>{
    const {defaultIndex,onSelect,children} = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const handlClick =(index:string)=>{
        setCurrentActive(index)
        onSelect && onSelect(index);
    }
    const passedContext = {
        index: currentActive? currentActive: '0',
        onSelect: handlClick
    }
    const renderChildren = ()=>{
        return React.Children.map(children, (value,index) => {
            const childElement = value as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if(displayName === 'menuItem' || displayName === 'MenuSub'){
               return React.cloneElement(childElement,{index:index.toString()})
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
    defaultIndex: '',
    mode: 'h'
}
export default Menu;
