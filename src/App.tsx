import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button";
import Alert from "./components/Alert";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";


function App() {
  console.log(12221);

    return (
    <div className="App">
    <Menu>
        <MenuItem>
            <div>这样可以</div>
        </MenuItem >
        <MenuItem>
            <div>这样可以</div>
        </MenuItem>
        <div>
            不可以
        </div>
        <MenuItem>
            <div>这样可以</div>
        </MenuItem>
    </Menu>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
            哈哈
      </Button>
    <Alert>
        112
    </Alert>
    </div>
  );
}
export default App;
