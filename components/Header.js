import React, {Component} from "react";

const Header = ({contacts}) => {
  return (
    <div id='header'>
      <nav>
        {/* <Link to='/'>HOME</Link>
        <Link to='/items'>ITEMS ({formItems.length})</Link> */}
        <a href='/'>HOME</a>
        <a href='/contacts'>CONTACTS ({contacts.length})</a>
      </nav>
      <hr></hr>

    </div>
  )
}

export default Header;