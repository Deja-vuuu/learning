import React from "react";

import Menu, { MenuProps } from "./menu";
import MenuSub,{SubMenuProps} from "./subMenu";
import MenuItem,{MenuItemProps} from "./menuItem";

export type IMenuComponent = React.FC<MenuProps> & {
    Item: React.FC<MenuItemProps>,
    SubMenu: React.FC<SubMenuProps>,

}

const AMenu = Menu as IMenuComponent
AMenu.Item= MenuItem
AMenu.SubMenu= MenuSub

export default AMenu
