import React, {Fragment, Component} from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/Users/UserItem'
import './App.css';
import Users from './components/Users/Users';
import axios from 'axios';

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({loading:true});    
    console.log('cmp mount called');
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data);
    this.setState({users:res.data, loading:false})
  }
  render() {
    const name = 'abc';
    const loading = true;
    const showName = false;


      return (
        <div>
          <Navbar/>
          <Users users={this.state.users} loading={this.state.loading}/>
        </div>
      );

  }
}

export default App;
