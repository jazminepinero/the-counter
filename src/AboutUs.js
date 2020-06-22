import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import './App.css';
import { green } from '@material-ui/core/colors';
import {
    Typography,
    Paper,
    Avatar
  } from "@material-ui/core";

function AboutUs() {
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
            width: "50vh",
            padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme
              .spacing(2)}px`
          },
          avatar: {
            margin: theme.spacing(2),
            background: "white"
            
          },
          typography: {
              width: "100%",
              fontSize: "20px",
              padding: "5px"

          }
      }));
      
      const classes = useStyles();
      
      
      

    return (
        <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar style={{ color: green[200] }} className={classes.avatar}>
            <SentimentSatisfiedTwoToneIcon />
          </Avatar>
          <Typography component="h2" variant="h5" className={classes.typography}>
          After joining a small CPA firm in beautiful South Tampa, Cory realized there was a huge gap in the market for an accounting trial balance software that was geared towards small business accountants. He was constantly dealing with a software that was crashing, causing errors, and overall reducing the workflow in the office
          </Typography>
          <Typography component="h4" variant="h5" className={classes.typography}>
          At Counter we are dedicated to enhancing the workflow of every small business accountant
              </Typography>
          
        </Paper>
      </main>
    )
}

export default AboutUs;
