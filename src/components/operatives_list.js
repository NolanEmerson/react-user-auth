import React from 'react';
import auth from '../hoc/auth';

const OpList =  props => (
    <div>
        <h1 className='text-center'>Oopoorootooves loost</h1>
        <ol>
            <li>ah</li>
            <li>bah</li>
            <li>cah</li>
            <li>dah</li>
            <li>eah</li>
            <li>fah</li>
        </ol>
    </div>
)

export default auth(OpList);