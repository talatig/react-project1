import React, {Fragment, Component} from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/Users/UserItem'
import './App.css';
import Users from './components/Users/Users';
import axios from 'axios';
import Search from './components/Users/Search'

class App extends Component{
  state = {
    users: [],
    loading: false
  }
  // async componentDidMount() {
  //   this.setState({loading:true});    
  //   console.log('cmp mount called');
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   console.log(res.data);
  //   this.setState({users:res.data, loading:false})
  // }
  searchUsers = async (text) => {
    if(text) {
      console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
      console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      this.setState({loading:true});
      console.log('parent called');
      console.log(text);
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items);
      this.setState({users:res.data.items, loading:false})   
    }
  }

  clearUsers = () => {
    this.setState({users:[], loading:false})    
  }

  render() {
    const name = 'abc';
    const loading = true;
    const showName = false;


      return (
        <div>
          <Navbar/>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} usersExist={this.state.users.length>0 ? true: false}/>
          <Users users={this.state.users} loading={this.state.loading}/>
        </div>
      );

  }
}

export default App;
