import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";
import {
  Paper,
  Button,
  Grid,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './styles'

export default function Chatone() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={4} style={{marginTop: '12px'}}>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.avatar}>
            <img className={classes.roundedCircle} width="100px" src="/img/avatars/default_avatar.png" alt="Card img cap" />
            <p className={classes.avatarName}>Crystal</p>
          </Paper>
          <Paper elevation={3} className={classes.about}>
            <div className={classes.aboutTitle}>About</div>
            <div className={classes.aboutBody}>
              <PersonIcon />
              <p>male</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.general}>
            <p className={classes.titleName}>
              rafa
            </p>
            <hr className={classes.headLine} style={{marginTop:'10px', }} />
            <div className={classes.aboutBody} style={{marginTop: '40px'}}>
              <BookmarksIcon /> &nbsp; &nbsp;
              <p className={classes.title}>Badges</p>
            </div>
            <div>
              <CheckCircleIcon color="primary" />
            </div>
            <div className={classes.aboutBody}>
              <CardGiftcardIcon /> &nbsp; &nbsp;
              <p className={classes.title}>Joined</p>
            </div>
            <p>2020-08-14T13:02:56.000Z</p>
          </Paper>
          <Paper elevation={3} className={classes.room}>
            <h5>
              Room
            </h5>
            <hr className={classes.headLine} style={{marginTop:'10px', }} />
            <div className={classes.roomBody} style={{marginTop: '40px'}}>
              <p className={classes.title}>testroom</p>
              <Button variant="outlined" color="primary">
                <SettingsIcon/>Setting
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.rightSide}>
            <p>©2019 Trand Chat Ltd </p>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
