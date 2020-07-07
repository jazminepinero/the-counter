import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from "./Dashboard"
import AboutUs from "./AboutUs"
import { green } from '@material-ui/core/colors';
import './App.css';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import EnhancedEncryptionTwoToneIcon from '@material-ui/icons/EnhancedEncryptionTwoTone';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';

import TrialBalance from './TrialBalance';

import App from './App';



function MenuLoggedOut() {
    const useStyles = makeStyles((theme) => ({
        link: {
        marginRight: theme.spacing(2),
        padding: 5,
        width: 50,
        height: 50,
        },
        icon: {
          marginRight: theme.spacing(1),
          width: 20,
          height: 20,
        },
      }));
      const classes = useStyles();
   
    
    return (
    
    <Router>    
    <div className="menuBar">
        <header className="menu">
        <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/" className={classes.link}>
        <HomeIcon style={{ color: green[500] }} className={classes.icon} />
        Home
      </Link>
      <Link
        color="inherit"
        to="/signup"
        className={classes.link}
      >
        <VpnKeyTwoToneIcon style={{ color: green[200] }} className={classes.icon} />Sign up</Link>
        <Link
        color="inherit"
        to="/login"
        className={classes.link}
      >
        <EnhancedEncryptionTwoToneIcon style={{ color: green[200] }} className={classes.icon} />Log in</Link>
        <Link
        color="inherit"
        to="/aboutus"
        className={classes.link}
      >
        <SentimentSatisfiedTwoToneIcon style={{ color: green[200] }} className={classes.icon} />About Us</Link>
        </Breadcrumbs>
            
            <div>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/trialbalance" component={TrialBalance} />
                </Switch>
            </div>
           
        </header>
    </div>
    </Router>
    
    );
}

export default MenuLoggedOut;



