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
        const {name,avatar_url,location,bio,blog,login,html_url,followers,following,hireable,company,website,public_repos,public_gists} = this.props.user;

        const {loading} = this.props;

        if(loading)
        return <Spinner/>
        return (
            <Fragment>
                <Link to = "/" className="btn btn-light">Back to search</Link>
                hireable : {' '}             
                { hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}   

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width: '150px'}} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>}
                            <a href={html_url} className="btn btn-dark my-1">Github Profile</a>
                        <Fragment>
                            <p>Username: {login}</p>
                            <p>Company: {company}</p>
                            <p>Website: {blog}</p>
                        </Fragment>
                    </div>
                </div>    

                <div className="card text-center">
                    <div className="badge badge-primary">Followers {followers}</div>
                    <div className="badge badge-success">Following {following}</div>
                    <div className="badge badge-light">Public repo {public_repos}</div>
                    <div className="badge badge-dark">Public gist {public_gists}</div>
                </div>        
            </Fragment>
        )
    }
}

export default User
