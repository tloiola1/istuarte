import React from 'react';

export const Brand = ({ children }) => 
<div className='bar'>
    <div className='v-bar1'/>
    <div className='v-bar2'/>
    <div className='v-bar3'/>
    <div className='h-bar'>
    { children }
    </div>
</div>;