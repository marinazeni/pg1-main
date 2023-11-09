import React from 'react';
import './Header.css'

function Header(){
    return(
    <header className='header'>

        <div className="divHeader">
            <h2 className='titulo'>
              <a href="/" className="links">
                EnglishVR
              </a>
            </h2>
        </div>
    </header>
    );
}
export default Header;