import React from 'react';
import '../../stylesheets/components/navbar.css';

export const NavItem = ({ children }) => 
<li role='presentation'>
    <span className='nav-item'>
    { children }
    </span>
</li>;