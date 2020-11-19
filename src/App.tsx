import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button";
import Alert from "./components/Alert";
import Menu from "./components/Menu";


function App() {
  console.log(12221);

  return (
    <div className="App">
        <Menu/>

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
