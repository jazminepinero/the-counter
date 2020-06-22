import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'; 
import { Link } from "react-router-dom"


function MenuLoggedIn() {
    function handleClick(e) {
        e.preventDefault();
        console.log("clicked")
    }
    return (
        <div>
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" to="/" onClick={handleClick}>
    Home
  </Link>
  <Link color="inherit" to="/SignUp" onClick={handleClick}>
    Account
  </Link>
  <Link
    color="textPrimary"
    to="/Login"
    onClick={handleClick}
    aria-current="page"
  >
    Log out
  </Link>
</Breadcrumbs>
        </div>
    )
}

export default MenuLoggedIn;
