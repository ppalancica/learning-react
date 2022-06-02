import React from 'react';
import Header from './Header';
import data from '../testData.json';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
    contests: this.props.initialContests
  };

  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        console.log(resp.data.contests);
        this.setState({
          contests: data.contests
        });
      })
      .catch(console.error);

    // this.setState({
    //   contests: data.contests
    // });
  }

  componentWillUnmount() {
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
}

export default App;
