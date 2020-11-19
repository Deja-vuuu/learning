import React from "react";
// import classNames  from "classnames";

type MenuMode = 'h' | 'v'
export interface MenuProps{
    defaultIndex:number;
    className: string;
    mode:MenuMode;
    style: React.CSSProperties;
    onSelect:(selectIndex: number)=>void
}
type BaseMenuProps = Partial<MenuProps>
const Menu:React.FC<BaseMenuProps> =(props)=>{
    return <div>1</div>
}
export default Menu;
