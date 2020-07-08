import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export class User extends Component {

    staticpropTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    componentDidMount(){
        console.log(this.props.match.params.login);
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {name,avatar_url,location,bio,blog,login,html_url,followers,following} = this.props.user;

        const {loading} = this.props;

        if(loading)
        return <Spinner/>
        return (
            <Fragment>
                <Link to = "/" className="btn btn-light">Back to search</Link>                
            </Fragment>
        )
    }
}

export default User
