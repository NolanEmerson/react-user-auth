import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions';

class Nav extends Component {
    constructor(props){
        super(props);

    }
    render(){

        const linkStyle = {
            color: 'white'
        }

        return (
            <nav className='navbar bg-primary mb-4'>
                <Link className='nav-link' style={linkStyle} to='/'>Home</Link>
                <Link className='nav-link' style={linkStyle} to='/about-us'>About Us</Link>
                <Link className='nav-link' style={linkStyle} to='/secret-docs'>Secret Docs</Link>
                <Link className='nav-link' style={linkStyle} to='operatives-list'>Operatives List</Link>
                {this.props.auth ?
                    <button onClick={() => this.props.changeAuth(false)} className='btn btn-danger'>Sign Out</button> :
                    <button onClick={() => this.props.changeAuth(true)} className='btn btn-outline-light'>Sign In</button>
                }
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {changeAuth})(Nav);