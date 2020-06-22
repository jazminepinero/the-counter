import React, { useState } from "react";
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
import firebase from "./firebase"
import { green } from '@material-ui/core/colors';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import { makeStyles } from '@material-ui/core/styles';




function SignUp(props) {
  

  const [name, setName] = useState("");
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
        <Avatar style={{ color: green[200] }} className={classes.root}>
          <EmojiPeopleOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign up for an account
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => e.preventDefault() && false}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="off"
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
            onClick={onRegister}
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Button
            type="submit"
            fullWidth
            style={{ color: green[500] }}
            component={Link}
            to="/login"
            className={classes.submit}
          >
            Go back to Login
          </Button>
        </form>
      </Paper>
    </main>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
}



export default SignUp;