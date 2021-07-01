import React, {useState, useEffect} from "react";
import useStyles from './styles'
import StickyHeadTable from './table'
import {
  Button,
  Grid,
  Paper
} from '@material-ui/core';

export default function TableCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.card}>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.sidecard}>
            <Paper>
              <h3>5 winners on Sunday!</h3>
              <p className={classes.small}>Gold and Silver winners included:-  4/1 Fast Emma,  7/2 Kristian Goingwel,  5/2 Atlantic Shore,  13/8 Klassy Kay,  5/4 Notation.</p>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.midcard} >
            <h2>TODAY'S BEST BETS</h2>
            <h3 style={{color:'goldenrod'}}>30pt WIN on NAP + 3pt WIN TREBLE</h3>
            <Paper className={classes.midcardinner}>
              <h4>Prairie Town (NAP) 7:40 Southwell</h4>
              <h5>Lithic 2:25 Fakenham</h5>
              <h5 style={{marginBottom:'0'}}>Alpha Theta 5:10 Southwell</h5>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.sidecard}>
            <Paper className={classes.rightcardinner}>
              <p>
                SpeedRatings.com #1 Tipster for Cheltenham 2017, runner-up in 2018 and #2 for Royal Ascot 2017
              </p>
              <br />
              <br />
              <p>
                2013 Grand National - Auroras Encore (our Gold selection) wins at 66/1 SP but a massive 127.13 at BSP! What a day!!
              </p>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={2} className={classes.button}>
          <Grid item>
            <Button variant="contained" color="primary" href="#contained-buttons" style={{textTransform: 'none'}}>
              Ayr
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href="#contained-buttons" style={{textTransform: 'none'}}>
              Lingfield
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href="#contained-buttons" style={{textTransform: 'none'}}>
              Punchestown
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href="#contained-buttons" style={{textTransform: 'none'}}>
              Wolverhampton
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href="#contained-buttons" style={{textTransform: 'none'}}>
              All Races
            </Button>
          </Grid>
        </Grid>
        <div className={classes.title}>
          <h3>It's official we are the number 1 tipster service over the past 12 months!</h3>
          <h4 style={{color:'white'}}>
            As verified by independent proofing website racing-index.com,
            <a href="https://www.racing-index.com/tipsters/performance-comparison.php?months=12&type=back" > view leaderboard</a>
          </h4>
          <h1>Today's Racecards (Remaining)</h1>
        </div>
      </div>
      <div className={classes.link}>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw">Tweet </a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
        <a href="https://twitter.com/SpeedRatingscom?ref_src=twsrc%5Etfw">Follow @SpeedRatingscom </a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
        <a href="https://twitter.com/intent/tweet?screen_name=SpeedRatingscom&ref_src=twsrc%5Etfw">Tweet to@SpeedRatingscom</a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <Paper className={classes.table}>
        <Grid container spacing={4} >
          <Grid item xs={12} sm={2}>
            <Grid container spacing={2}>
              <Grid item>
                <img src="https://www.speedratings.com/images/flags/GB.png" height="24" width="24" alt="GB" title="GB" />
              </Grid>
              <Grid item>
                <p>11:45 Newcastle (LH)</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} style={{padding:'16px 5%'}}>
            <h5 style={{fontWeight:'500', color:'goldenrod'}}>Watch Off The Fence On attheraces.com Mares' Standard Open National Hunt Flat Race (GBB Race) (AW)</h5>
            <div style={{marginBottom: '7px'}}>
              Going:<span> Standard/Slow</span> &nbsp; &nbsp; &nbsp;
              Weather:<i className="wi wi-showers" title="Showers" />Showers &nbsp; &nbsp; &nbsp;
              Prize:£ 2k &nbsp; &nbsp; &nbsp;
              Class: 5 &nbsp; &nbsp; &nbsp;
              Distance: 16f
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
        </Grid>
        <Paper className={classes.tableinner}>
          <StickyHeadTable />
        </Paper>
      </Paper>
    </div>
  );
}
