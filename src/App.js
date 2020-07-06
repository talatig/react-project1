import React, {Fragment, Component} from 'react';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import UserItem from './components/Users/UserItem'
import './App.css';
import Users from './components/Users/Users';
import axios from 'axios';
import Search from './components/Users/Search'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends Component{
  state = {
    users: [],
    loading: false,
    alert: null
  }
  // async componentDidMount() {
  //   this.setState({loading:true});    
  //   console.log('cmp mount called');
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   console.log(res.data);
  //   this.setState({users:res.data, loading:false})
  // }
  searchUsers = async (text) => {
    //if(text) {
      console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
      console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      this.setState({loading:true});
      console.log('parent called');
      console.log(text);
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items);
      this.setState({users:res.data.items, loading:false})   
    //}
  }

  setAlert = (msg,type) => {
    console.log(msg);
    console.log(type);
    this.setState(
      {
        alert:{
          msg: msg,
          type: type    
        }
      }
    ) 

    setTimeout (()=>{
      this.setState({alert:null})
    },5000)
  }

  clearUsers = () => {
    this.setState({users:[], loading:false})    
  }

  render() {
      const {users,loading} = this.state;
      return (
        <Router>
        <div>
          <Alert alert={this.state.alert}/>
          <Navbar/>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} usersExist={users.length>0 ? true: false} setAlert={this.setAlert}/>
          <Users users={users} loading={loading}/>
        </div>
        </Router>
      );

  }
}

export default App;
