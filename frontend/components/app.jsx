import React from 'react';
import NavbarContainer from './navbar/navbar_container';


const App = ({location, children}) => {


  if (!(location.pathname === "/")) {
    return (
      <section>
        <NavbarContainer />
        {children}
      </section>
    );
  } else {
    return (
      <section>
        {children}
      </section>
    );
  }
};

export default App;
