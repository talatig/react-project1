import React, { Component } from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

const Users = ({users, loading}) => {
    if(loading) {
        return (<Spinner/>)            
    } else {
        return (
            <div>
            {users.map(user=>
                <UserItem key={user.id} user={user}/>
            )}                
            </div>
        )
    }
}
        
export default Users
