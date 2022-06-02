import React from 'react';
import Header from './Header';
import data from '../testData.json';
import ContestPreview from './ContestPreview';

// If we need to use state or lif-cycle of the component
class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
    contests: []
  };
  // state = { test: 42 };
  // constructor(props) {
  //   super(props);
  //   this.state = { test: 42 };
  // }

  componentDidMount() {
    // Ajax calls, timers, listeners to other events etc.
    console.log('componentDidMount()...');
    //console.log(data);
    this.setState({
      contests: data.contests
    });
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
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  };

  /*render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  };*/

  //<ContestPreview {...this.props.contests[0]} />

  /*render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }*/
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
