import React, { Component } from 'react';
import '../css/styles.css';
import mainLogo from '../img/logo-skladista.png';

class Header extends Component {
render(){
return(
<div className="header">
    <img id="logo" src={mainLogo} alt="logo" className="pulse" />
    <p>Dobrodošli u <b>Skladišta</b></p>
</div>
);
}
}

export default Header;