import React, {Fragment, Component} from 'react';
import './App.css';

class App extends Component{
  render() {
    const name = 'abc';
    const loading = false;
    const showName = false;


      return (
        <Fragment>
          {loading ? <h1>hello {name}</h1>:<h4>hello {showName && '111'}</h4>}
        </Fragment>
      );

  }
}

export default App;
