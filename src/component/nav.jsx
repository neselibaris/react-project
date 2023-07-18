import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
          <div>
          <Link to="/"><button>Anasayfa</button></Link>
          <h1>Hoş Geldiniz...</h1>
          </div>
      
    </nav>
  );
}

export default Nav;