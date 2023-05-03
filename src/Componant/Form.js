import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";





const Form = () => {
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  

  return (
    <>
      <ThemeProvider theme={theme}>        
                                   {/*----------- passsing theme as a Globally Level/app */}
        <Container component="main" maxWidth="xs">
     
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>  
                        {/*----------- taking color from Deafult/Custom theme theme */}
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography component="h1" variant="h6">
              Sign in
            </Typography>

            <Box
              component="form"              // to make this div as a - Form in html
              onSubmit={handleSubmit}
              Validate                   // to perform Required msg in Input field
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required          
                fullWidth             // for Width -100% according to parent div
                id="email"
                label="Email Address"    // it will work Both as a - PLaceholder & Label
                name="email"
                autoComplete="email"       //Usef to - automatic Find similar keyward form DropDown Option
                autoFocus           // it enables to write inside input fild
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>

          </Box>

          <Copyright sx={{ mt: 8, mb: 4 }} />

        </Container>
      </ThemeProvider>
      
    </>
  );

};

export default Form;
