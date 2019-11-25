import React from "react";
import { Link } from 'gatsby';

import Header from '../components/Header';

export default () => (
    <div style={{color:'purple'}}>
        <Link to='/contact/'>Contact</Link>
        <Header header='Component header' para='para' />
        <img src = "https://source.unsplash.com/random/400x200"
        alt = "" />
    </div>
);
