import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';

export default () => (
    <div style={{color:'teal'}}>
        <Link to='/'>Home</Link>
        <Header header='Contact' para='send us a message' />
    </div>
);