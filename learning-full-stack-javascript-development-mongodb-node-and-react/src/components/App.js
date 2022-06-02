import React from 'react';
import Header from './Header';

// If we need to use state or lif-cycle of the component
class App extends React.Component {
  state = {
    pageHeader: "Naming Contests"
  };
  // state = { test: 42 };
  // constructor(props) {
  //   super(props);
  //   this.state = { test: 42 };
  // }

  componentDidMount() {
    // Ajax calls, timers, listeners to other events etc.
    console.log('componentDidMount()...');
  }

  componentWillUnmount() {
    // clean timers, listeners
    console.log('componentWillUnmount()...');
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}
// We can change the component's state from the browser's console:
// $r.setState({pageHeader: "Some text"})

// React.createClass
// extends React.Component

/*const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};
*/
export default App;
