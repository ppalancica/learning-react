import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import data from './testData.json';
import App from './components/App';

/* Didn't work. Maybe webpack was not configured correctly.
import data from './testData';
console.log(data);

data.contests actually got initailized if using:
import data from './testData.json';
just console would not log it

We need a way for webpack to understand JSON data:
npm i -S json-loader

{
  test: /\.json$/,
  exclude: /node_modules/,
  use: {
    loader: 'json-loader'
  }
}

Maybe look here:
https://www.pluralsight.com/guides/load-a-json-file-with-es6-modules-implementation

*/

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// App.propTypes = {
//   headerMessage: React.PropTypes.string
// };

root.render(
  // <App contests={data.contests} />
  // <App contests={[]} />
  <App initialContests={[]} />
);

// root.render(
//   <App headerMessage="Hello props" />
// );

// To force component unmount
/*setTimeout(() => {
  root.render(
    <h2>:::</h2>
  );
}, 4000);
*/

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
