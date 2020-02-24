import React, { Component } from 'react'

class Search extends Component {
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
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }   
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.usersExist && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
