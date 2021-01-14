import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button";
import Alert from "./components/Alert";
import Menu from "./components/Menu";
import Icon from "./components/Icon";



function App() {
    return (
    <div className="App">
    <Menu onSelect={(index)=>{
        console.log(index)
    }}>
        <Menu.Item>
            <div>这样可以1</div>
        </Menu.Item >
        <Menu.Item>
            <div>这样可以2</div>
        </Menu.Item>
        <Menu.SubMenu>
            <Menu.Item>
                <div>这样可以3</div>
            </Menu.Item>
            <Menu.Item>
                <div>这样可以4</div>
            </Menu.Item>
        </Menu.SubMenu>
        <div>
            不可以
        </div>
        <Menu.Item>
            <div>这样可以5</div>
        </Menu.Item>
    </Menu>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
            哈哈
      </Button>
    <Alert>
        112
    </Alert>
        <span className='learn-font icon-zu920'/>
        <Icon type='icon-xianxingshouji'/>
    </div>
  );

}
export default App;
