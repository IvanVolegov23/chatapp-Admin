import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  // Paper,
  TextField,
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rooter: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
    },
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{marginTop: '38px'}}>
        <Grid item xs={12} sm={3}>
          <img alt="CLOUD BET BOT" src="https://www.cloudbetbot.com/wp-content/uploads/2019/05/big-logo.png" style={{width: "100%"}}/>
        </Grid>
        <Grid item xs={12} sm={9} style={{paddingLeft: '5%'}}>
          <div>
            <p>
              Cloud Bet Bot is a third party service that provides automated cloud betting solutions for tipsters and service providers, it is a free service for clients following services that use the platform. Only one account is required to follow multiple independent services and systems.
            </p>
            <p>
              <br />
            </p>
            <p>
              Once the service provider has authorised your access; you login, go to the service providers 'bot page', set your stake and activate it -that's it. You can change your stake or stop the bot placing the bets at any time. You don't need to keep the web page open, our cloud engines order the bets for you.
            </p>
            <p>
              <br />
            </p>
            <p>
              Services utilising Cloud Bet Bot are not rated, ranked or in a league, are not cross promoted, have no adverts on bot pages. Its a simple 'set and forget' platform to alleviate having to manually order bets that tipsters send you.
            </p>
            <p>
              <br />
            </p>
            <p>
              If you'd like to know more or are a service provider wanting to automate bet placement for your clients please send us a message, we'll be happy to hear from you!
            </p>
          </div>
          <form className={classes.rooter} noValidate autoComplete="off">
            <TextField id="outlined-name" label="First Name" variant="outlined" style={{marginTop: '30px'}} />
            <TextField id="outlined-email" label="Email" variant="outlined" style={{marginTop: '20px'}} />
            <TextField id="outlined-message" label="Message" variant="outlined" multiline rows={4} style={{marginTop: '20px'}} />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{marginTop: '20px', marginBottom: '20px'}} >
              Send message
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
