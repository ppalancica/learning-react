import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

const color = Math.random() > 0.5 ? 'green' : 'red';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = (props) => {
  return (
    <h2 className="text-center" style={{color: color}}>
      {props.headerMessage}
    </h2>
  );
};

// App.propTypes = {
//   headerMessage: React.PropTypes.string
// };

root.render(
  <App headerMessage="Hello props" />
);

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
