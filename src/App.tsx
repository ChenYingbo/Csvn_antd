import React from 'react';
import Button,{ButtonSize, ButtonType} from './components/Button/button'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>测试</Button>
        <Button btnType={ButtonType.Primary}>primary</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
        <Button btnType={ButtonType.Danger}>primary</Button>
        <Button disabled>测试</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Larget}>primary</Button>
        <Button btnType={ButtonType.Link} disabled size={ButtonSize.Larget} href='http://www.baidu.com'>Link</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>primary</Button>    
      </header>
    </div>
  );
}

export default App;
