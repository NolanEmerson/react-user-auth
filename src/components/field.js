import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInputChange} from '../actions';

class Field extends Component{

    render() {

        const {label, type, placeholder, name, value, handleInputChange} = this.props;

        return (
            <div className='form-group'>
                <label className='text-light'>{label}</label>
                <input onChange={handleInputChange} value={value} type={type} className='form-control' placeholder={placeholder} name={name} />
            </div>
        )
    }
}

export default connect(null, {handleInputChange})(Field);