import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  card: {
    marginTop: '18px',
  },

  sidecard: {
    padding: theme.spacing(2),
    textAlign: 'center !important',
    backgroundColor: '#093028',
    '& > *': {
      padding: theme.spacing(2),
      backgroundColor: '#b8ecda',
    },
  },

  midcard: {
    padding: theme.spacing(2),
    textAlign: 'center !important',
    backgroundColor: '#093028',
    color: 'white',
    marginTop: '5px',
  },

  small: {
    fontSize: '80%',
    fontWeight: '600',
  },

  midcardinner: {
    padding: theme.spacing(2),
    backgroundColor: '#b8ecda',
    color: '#1c2422',
  },

  rightcardinner: {
    fontWeight: '600',
    fontSize: '94%',
  },

  button: {
    marginTop: '28px',
    justifyContent: 'center',
  },

  title: {
    marginTop: '70px',
    textAlign: 'center !important',
    color: 'goldenrod',
  },

  link: {
    marginTop: '18px',
    textAlign: 'center !important',
  },

  table: {
    marginTop:'50px',
    padding: theme.spacing(2),
    backgroundColor: '#093028',
    color: 'white',
  },

  tableinner: {
    padding: '16px 8px',
    backgroundColor: '#b8ecda',
  },

}));

export default useStyles;