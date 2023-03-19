import React from 'react';
import HeaderNav from './headerContent/HeaderNav';
import HeaderTop from './headerTop/HeaderTop';

function Header(props) {
    
    return (
        <>
           <HeaderTop /> 
           <HeaderNav />
        </>
    );
}

export default Header;