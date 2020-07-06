import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// export class Navbar extends Component {
//     static defaultProps = {
//         title : 'Github Finder',
//         icon : 'fab fa-github'
//     }

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <nav className="navbar bg-primary">
//                 <h1>
//                     <i className={this.props.icon}></i>
//                      {this.props.title}
//                 </h1>
//             </nav>
//         )
//     }
// }

//converting above class based Component to functional Component
const Navbar = (props) => {
    const {icon,title} = props;
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}></i>
                    {title}
            </h1>
            <ul>
                <li>
                   <Link to='/about'>About</Link>     
                </li>                
            </ul>
        </nav>        
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
