import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import '@fontsource/roboto';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, grey, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
     palette: {
       primary: {
         main: blue[500]
       },
       secondary: {
         main: green[500]
       }
     }
   })

   const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, grey, white)',
      border: 0,
      marginBottom: 15,
      borderRadius: 15,
      borderWidth: 5,
      color: 'white',
      padding: '5px 30px'
    }
  })

  function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.root}>Styled Button</Button>
  }

function App() {

  // const theme = createMuiTheme({
  //   pallette: {
  //     primary: {
  //       main: blue[500]
  //     },
  //     secondary: {
  //       main: green[300]
  //     }
  //   }
  // })

  // const theme = {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled/>
          <Box color="primary">
            <Typography variant="h3">Buttons</Typography>
            <Button variant="contained" color="secondary">Click Me</Button>
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
