import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button
} from "@material-ui/core";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";

import firebase from "./firebase";
import { Link as RouteLink } from "react-router-dom";
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';


function Dashboard(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect (() => {
    setTimeout (() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  
 
  const useStyles = makeStyles((theme) => ({
    main: {
      width: "auto",
      display: "block", // fixes IE11 problem
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme
        .spacing(3)}px`
    },
    avatar: {
      margin: theme.spacing(2),
      background: "white"
      
    },
    form: {
      width: "100%", // fixes IE11 problem
      marginTop: theme.spacing(2)
    },
    submit: {
      marginTop: theme.spacing(3)
    }
  }));
  const classes = useStyles();
 // if(!firebase.getCurrentUsername()) {
		// not logged in
	//	alert('Please login first')
	//	props.history.replace('/')
		
//	}
  




    

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VerifiedUserOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Hello {firebase.getCurrentUsername()}
        </Typography>
        <Skeleton variant="text" />
        <Typography variant="subtitle" gutterBottom>
          This is the dashboard
        </Typography>
        <Button
          type="submit"
          fullWidth
          style={{ color: green[500] }}
          onClick={logout}
          className={classes.submit}
        >
          Logout
        </Button>
        <Button
           type="submit"
           fullWidth
           style={{ color: green[500] }}
           component={RouteLink}
           to="/trialbalance"
           className={classes.submit}
        >
          To software
        </Button>
      </Paper>
    </main>
  );
  

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}



export default Dashboard;