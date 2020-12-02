import React, {useState,createContext} from "react";
// import classNames  from "classnames";

type MenuMode = 'h' | 'v'
export interface MenuProps{
    defaultIndex?:number;
    className: string;
    mode:MenuMode;
    style: React.CSSProperties;
    onSelect? :(selectIndex: number)=>void,
    // children:React.ReactChild
}
interface IMenuContext{
    index: number,
    onSelect :(selectIndex: number)=>void,
}
export const MenuContext = createContext<IMenuContext>({
    index: 1,
    onSelect: ()=>{}
})
type BaseMenuProps = Partial<MenuProps>
const Menu:React.FC<BaseMenuProps> =(props)=>{
    const {defaultIndex,onSelect} = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const handlClick =(index:number)=>{
        setCurrentActive(index)
        onSelect && onSelect(index);
    }
    const passedContext = {
        index: currentActive? currentActive: 0,
        onSelect: handlClick
    }
    return <MenuContext.Provider value={passedContext}>
        {props.children}
    </MenuContext.Provider>
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'h'
}
export default Menu;
