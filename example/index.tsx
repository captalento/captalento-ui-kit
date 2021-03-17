import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// the importing location is automatically `dist` folder
import { Button } from '../';
const App = () => {
  return (
    <div>
      <Button>Test</Button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));