import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// App.propTypes = {
//   headerMessage: React.PropTypes.string
// };

root.render(
  <App headerMessage="Hello props" />
);

// To force component unmount
setTimeout(() => {
  root.render(
    <h2>:::</h2>
  );
}, 4000);

/*const App = () => {
  return (
    <h2 className="text-center" style={{color: color}}>
      Hello React Components!
    </h2>
  );
};

root.render(
  <App />
);
*/

/*
root.render(
  <h2 className="text-center" style={{color: color}}>
    Hello React with JSX!
  </h2>
);*/

// Outdated:
// ReactDOM.render(
//   <h2 style={{color: color}}>
//     Hello React with JSX!
//   </h2>
//   document.getElementById('root')
// );

/*ReactDOM.render(
  React.createElement('h2', null, 'Hello React'),
  document.getElementById('root')
);
*/
