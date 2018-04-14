import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions';

class Nav extends Component {
    constructor(props){
        super(props);

    }

    renderLinks(){

        const linkStyle = {
            color: 'white'
        }

        console.log(this.props);

        if(this.props.auth){
            return [
                <Link key='0' className='nav-link' style={linkStyle} to='/secret-docs'>Secret Docs</Link>,
                <Link key='1' className='nav-link' style={linkStyle} to='/operatives-list'>Operatives List</Link>,
                <Link key='2' className='nav-link' style={linkStyle} to='/movie-quote'>Movie Quote</Link>,
                <button key='3' className='btn btn-light' onClick={this.props.signOut}>Sign Out</button>
            ];
        }

        return [
            <Link key='0' className='nav-link' style={linkStyle} to='/sign-up'>Sign Up</Link>,
            <Link key='1' className='nav-link' style={linkStyle} to='/sign-in'>Sign In</Link>
        ]
    }

    render(){

        const linkStyle = {
            color: 'white'
        }

        return (
            <nav className='navbar bg-primary mb-4'>
                <Link className='nav-link' style={linkStyle} to='/'>Home</Link>
                <Link className='nav-link' style={linkStyle} to='/about-us'>About Us</Link>
                {this.renderLinks()}
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut})(Nav);