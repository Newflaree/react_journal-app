// Redux
import { useDispatch } from 'react-redux';
// React Router
import { Link as RouterLink } from 'react-router-dom'
// Material UI
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { Google } from '@mui/icons-material';
// Custom Hooks
import { useForm } from '../../hooks';
// Layout
import { AuthLayout } from '../layout';
// Store
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'test1@email.com',
    password: '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log( 'onGoogleSignIn' );
    dispatch( startGoogleSignIn() );
  }


  return (
    <AuthLayout title='login'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid
            item
            xs={ 12 }
            sx={{
              mt: 2
            }}
          >
            <TextField 
              label='Correo'
              type='email'
              placeholder='correo@email.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{
              mb: 2,
              mt: 1
            }}
          >
            <Grid
              item
              xs={ 12 }
              sm={ 6 }
            >
              <Button
                variant='contained'
                fullWidth
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={ 12 }
              sm={ 6 }
            >
              <Button
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/register'
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
}
