import React, {Component} from 'react';
import {connect} from 'react-redux';
import Field from './field';
import {formError, signUp} from '../actions';

class SignUp extends Component{

    handleSignUp(e){
        e.preventDefault();

        const {email, password, confirm} = this.props.values;
        const errors = [];

        if(!email){
            errors.push('Please enter an email');
        }

        if(!password){
            errors.push('Please enter a password');
        }
        
        if(password !== confirm){
            errors.push('Passwords must match');
        }

        this.props.formError(errors);

        if(errors.length === 0){
            this.props.signUp({email, password});
        }
    }

    render() {
        const inputs = [
            {
                label: 'Email Address',
                type: 'text',
                placeholder: 'Enter email',
                name: 'email'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Enter password',
                name: 'password'
            },
            {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'Confirm password',
                name: 'confirm'
            }
        ];

        const {values, errors} = this.props;

        console.log("Errors present: ", errors);

        const fieldMap = inputs.map((field, index) => {
            return <Field {...field} key={index} value={values[field.name] || ''} />
        });

        return (
            <div className='row justify-content-center'>
                <h1 className='text-center col-12 mb-3'>Sign Up</h1>
                <div className='card col-8 bg-primary'>
                    <div className='card-body'>
                        <form onSubmit={(e) => this.handleSignUp(e)}>
                            {fieldMap}
                            <div className='row'>
                                <button className='btn btn-light'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        values: state.form.values,
        errors: state.form.errors
    }
}

export default connect(mapStateToProps, {formError, signUp})(SignUp);