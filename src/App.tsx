import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button";


function App() {
  console.log(12221);
  
  return (
    <div className="App">
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
            哈哈
        </Button>
    </div>
  );
}
export default App;
