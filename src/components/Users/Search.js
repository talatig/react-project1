import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }
    state = {
        text: ''
    }
    onChange = (e) => {
        console.log(this.state.text);
        // this.setState({text: e.target.value});
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
        if(this.state.text==''){
            console.log('text is empty');
            this.props.setAlert('please enter something','light');
        }
        else {        
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    }   
    render() {
        const {usersExist,clearUsers} = this.props;        
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {usersExist && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
