import React, {useState} from 'react';
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";

import { Link } from "react-router-dom";
import EnhancedEncryptionTwoToneIcon from '@material-ui/icons/EnhancedEncryptionTwoTone';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';




function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar style={{ color: green[200] }} className={classes.avatar}>
          <EnhancedEncryptionTwoToneIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Log in
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => e.preventDefault() && false}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            style={{ color: green[500] }}
            component={Link}
            to="/dashboard"
            className={classes.submit}
          >
            log in
          </Button>
          <Button
            type="submit"
            fullWidth
            style={{ color: green[500] }}
            component={Link}
            to="/signup"
            className={classes.submit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </main>
  );

  
}




export default Login;