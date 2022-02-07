import './App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { purple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const label = { inputProps: { 'aria-label': 'Accept' } };
const preventDefault = (event) => event.preventDefault();



const App = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: purple[500] }} ><LockOutlinedIcon /></Avatar>
            </Stack>
            <Typography sx={{ fontSize: 25, mb: 3, mt: 1 }} variant="h5" component="h1">Sign up</Typography>
            <Box
              component="form"
              sx={{
                width: 400,
              }}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField id="first-name-input" label="First Name *" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="last-name-input" label="Last Name *" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="email-input" label="Email Address*" variant="outlined" autoComplete='email' />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="pass" fullWidth label="Password *" variant="outlined" autoComplete='password'></TextField>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email." />
                  </FormGroup>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <Button variant="contained">SIGN UP</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <Link href="#" variant="body2" sx={{ fontSize: 15 }}>
                    {'Already have an account? Sign in'}
                  </Link>
                <Grid item xs={12}>
                  <Typography color="text.secondary" sx={{textAlign:'center', fontSize: 14, mt:4}}>
                    Copyright © <Link  href="https://mui.com/" variant="body2" color="text.secondary">Your Website</Link> 2022.
                  </Typography>
                </Grid>
                </Grid>








              </Grid>


            </Box>
          </Box>
        </Container>
      </React.Fragment>


    </div>
  )
}

export default App;
