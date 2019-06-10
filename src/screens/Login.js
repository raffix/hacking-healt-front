import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AppSettings } from '../app.settings'

function DidFor() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Craido pelo Hub da Saúde '}
      <Link color="inherit" href="#">
        Chapecó
      </Link>      
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();


  return (
    <Container style={{backgroundColor: 'white'}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Autenticação
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Usuário"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
          />
          <span id="error1" style={{color: 'red', display: 'none'}}>Usuário ou senha inválidos</span>          
          <span id="error2" style={{color: 'red', display: 'none'}}>Erro! Contate o Administrador</span>          
          <Button
            type="button"
            fullWidth
            onClick={() => {
              let header = {
                'Content-Type': 'application/json'
              }
            
              let options = {
                method: 'POST',
                body: JSON.stringify({
                  login: document.getElementById('login').value,
                  senha: document.getElementById('senha').value
                }),
                headers: header
              };
            
            
              fetch(AppSettings.BASE_URL + "/login", options)
                .then(res => res.json())
                .then(
                  (result) => {
                    document.getElementById('error1').style.display = "none"
                    document.getElementById('error2').style.display = "none"
                    console.log(result)
                    if(result.error === undefined) {
                      window.localStorage.setItem('token', result.token)
                      window.location.href = '/Inicial'
                    } else {
                      document.getElementById('error1').style.display = "block"
                    }
                  },
                  (error) => {
                    document.getElementById('error2').style.display = "block"        
                  }
                )
              
              }
            }
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>              
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <DidFor />
      </Box>
    </Container>
  );
}