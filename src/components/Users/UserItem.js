import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// class UserItem extends Component {

//     state = {
//         id: '1',
//         login: 'mojombo',
//         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//         html_url: 'https://github.com/mojombo'
//     }

//     render() {
//         const {id,login,avatar_url,html_url} = this.props.user;
//         return (
//             <div>
//                 <p>{id}</p>
//                 <p>{login}</p>
//                 <img style={{width: '60px'}} className='round-img' src={avatar_url}/>
//                 <p>{html_url}</p> 
//             </div>
//         )
//     }
// }

//converting above class based Component to functional Component
const UserItem =(props) => {
    const {id,login,avatar_url,html_url} = props.user;
    return (
        <div>
            <p>{id}</p>
            <p>{login}</p>
            <img style={{width: '60px'}} className='round-img' src={avatar_url}/>
            <p>{html_url}</p> 
            <div>
                <Link to ={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem