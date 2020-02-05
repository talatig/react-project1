import React, {Fragment, Component} from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/Users/UserItem'
import './App.css';
import Users from './components/Users/Users';

class App extends Component{
  render() {
    const name = 'abc';
    const loading = true;
    const showName = false;


      return (
        <div>
          <Navbar/>
          <Users/>
        </div>
      );

  }
}

export default App;
