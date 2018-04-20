import React from 'react'; 

export const NavItem = ({ children }) => 
<li role='presentation'>
    <span className='nav-item'>
    { children }
    </span>
</li>;