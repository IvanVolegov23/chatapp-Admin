import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  // Paper,
  TextField,
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  Paper
} from '@material-ui/core';
import useStyles from './styles'

export default function Profile() {
  const classes = useStyles();

  const [country, setCountry] = useState('UK');
  const [email, setEmail] = useState('');
  const [displayname, setDisplayname] = useState('')

  useEffect(() => {

    const profileRead = async () => {
      let token = localStorage.getItem("auth-token");
      const users = await Axios.get("http://localhost:5000/profile/read",
        { headers: { "x-auth-token": token } }
      );
      setEmail(users.data.email);
      setDisplayname(users.data.displayName);
    }

    profileRead()
  }, [email]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{marginTop: '38px'}}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.service}>
            <p className={classes.yourService}>
              Your Services
            </p>
            <Link to="#">
              <p className={classes.hub}> Hub Point </p>
            </Link>
          </Paper>
          <Paper elevation={3} className={classes.betfair} >
            <p className={classes.yourService}>
              Betfair
            </p>
            <div>
              <Grid container spacing={2} >
                <Grid item xs={6} sm={6}>
                  <p>Linked</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p>DE-AUTHORISE</p>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2} >
                <Grid item xs={6} sm={6}>
                  <p>Name</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p>Aaron Scane</p>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2} >
                <Grid item xs={6} sm={6}>
                  <p>Balance</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p>GBP0.42</p>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={2} >
                <Grid item xs={6} sm={6}>
                  <p>Points Balance</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p>712</p>
                </Grid>
              </Grid>
            </div>
            <div style={{marginTop:'6px'}}>
              <a href="http://www.betfair.com/www/GBR/en/aboutUs/Betfair.Charges/">
                <p>Betfair Charges Info</p>
              </a>
            </div>
            <div style={{marginTop:'6px'}}>
              <a href="https://myaccount.betfair.com/accountdetails/mysecurity?showAPI=1">
                <p>Betfair Security Page</p>
              </a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <form className={classes.profile} noValidate autoComplete="off">
              <p className={classes.yourService}>
                Profile
              </p>
              <TextField 
                id="outlined-email" 
                label="Email Address* (cannot be changed)" 
                variant="outlined" 
                value={email}
                disabled size="small" 
                style={{marginTop: '20px'}} 
              />
              <TextField 
                id="outlined-firstname" 
                label="First Name*" 
                variant="outlined" 
                value="Aaron" 
                size="small" 
                style={{marginTop: '20px'}} 
              />
              <TextField 
                id="outlined-lastname" 
                label="Last Name*" 
                variant="outlined" 
                value="Scane" 
                size="small" 
                style={{marginTop: '20px'}} 
              />
              <TextField 
                id="outlined-displayname" 
                label="Display Name*" 
                variant="outlined" 
                value={displayname} 
                size="small" 
                style={{marginTop: '20px'}}
                onChange={(e) => setDisplayname(e.target.value)} 
              />
              <FormControl variant="outlined" className={classes.formControl} size="small" style={{marginTop: '20px'}}>
                <InputLabel htmlFor="outlined-age-native-simple">Country*</InputLabel>
                <Select
                  native
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  label="Country*"
                  inputProps={{
                    name: 'country',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Romania">Romania</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
              <hr style={{marginTop: '10px', height:"1px", borderWidth:"0", backgroundColor:"black"}}/>
              <div style={{marginTop: '10px'}}>
                <p>
                  <strong>New Password?</strong>
                  <i> (please type it twice)</i>
                </p>
                <p>
                  <i>Only if changing password, otherwise leave blank</i>
                </p>
              </div>
              <TextField 
                id="outlined-repassword" 
                label="New Password*" 
                variant="outlined" 
                value="" 
                size="small" 
                style={{marginTop: '12px'}} 
              />
              <TextField 
                id="outlined-recomfirm" 
                label="Password Confirm*" 
                variant="outlined" 
                value="" 
                size="small" 
                style={{marginTop: '12px'}} 
              />
              <p className={classes.indicator}>Strength indicator</p>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{marginTop: '20px', marginBottom: '10px'}} >
                Save All Changes
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
