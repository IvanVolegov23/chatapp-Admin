import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  profile: {
  	padding: theme.spacing(2),
  	PaddingLeft: '2%',
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
    },
  },

  service: {
  	padding: theme.spacing(2),
  	PaddingRight: '2%',
  },

  yourService: {
  	fontSize: '36px',
  	marginBottom: '5px',
  },

  betfair: {
  	padding: theme.spacing(2),
  	PaddingRight: '2%',
  	marginTop: '20px',
  },

  hub: {
  	fontWeight: '600',
  	color: '#18BC9C',
  	cursor: 'pointer',
  	fontSize: '20px',
  	'&:hover': {
  		color: '#149079',
  	},
  },

  indicator: {
  	backgroundColor:"#eee", 
  	marginTop:"6px", 
  	height:"35px",
  	display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    borderRadius: '2px 2px',
    paddingLeft: '2%',
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

export default useStyles;