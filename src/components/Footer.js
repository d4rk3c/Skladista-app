import React, { Component } from 'react';
import '../css/styles.css';

class Footer extends Component {
render(){
return(
<div className="footer">
<p><i>Registered by:</i> <a href="https://www.linkedin.com/in/darko-radojevic-7a734587/" target="_blank" rel="noopener noreferrer"><strong>Darko Radojevic</strong></a>&reg;</p> 
</div>
);
}
}

export default Footer;