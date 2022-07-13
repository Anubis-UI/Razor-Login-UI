import React, { useState } from "react";

// Mui
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Reusable Components
import Button from "../../common/components/Button";
import Typography from "../../common/components/Typography";
import AuthFormBox from "./components/AuthFormBox";
import Input from "../../common/components/Input";

// Icons
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

// Utils
import { ButtonText } from "../../common/utils/constants";
import { useStyles } from "./styles/styles";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const classes = useStyles();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Stack sx={{ bgcolor: "#F4F2EB", height: "100vh" }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={{ padding: 2, color: "black", fontWeight: 950 }}
        >
          <Typography sx={{ fontWeight: 950 }}>RAZOR LOGO</Typography>
          <Typography>sales@razor.uk</Typography>
        </Stack>

        <Stack sx={{ justifyContent: "flex-end", padding: 2 }}>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Button
              href="/"
              sx={{
                background: "transparent",
                border: "none",
                textTransform: "none",
              }}
            >
              {ButtonText["sign-up"]}
            </Button>
            <Button sx={{ fontWeight: 950, textTransform: "none" }}>
              {ButtonText["request-demo"]}
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{ alignItems: "center" }}>
        <AuthFormBox>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 950,
              margin: 1,
              fontSize: 30,
            }}
          >
            Agent Login
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              margin: 1,
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Hey, Enter your details to get sign in to your account
          </Typography>

          <Input label="Enter Email / Phone No" />

          <FormControl sx={{ m: 1, width: "430px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Typography sx={{ padding: 1, cursor: "pointer" }}>
            Having trouble Sign In?
          </Typography>

          <Button sx={{ textTransform: "none" }}>
            {ButtonText["sign-in"]}
          </Button>

          <Typography sx={{ textAlign: "center" }}>
            - Or Sign in with -
          </Typography>

          <Stack
            direction="row"
            sx={{ gap: 2, justifyContent: "center", margin: 1 }}
          >
            <Button
              sx={{ background: "white", textTransform: "none", fontSize: 10 }}
              startIcon={<GoogleIcon />}
            >
              {ButtonText["google"]}
            </Button>
            <Button
              sx={{ background: "white", textTransform: "none", fontSize: 10 }}
              startIcon={<AppleIcon />}
            >
              {ButtonText["apple"]}
            </Button>
            <Button
              sx={{ background: "white", textTransform: "none", fontSize: 10 }}
              startIcon={<FacebookIcon />}
            >
              {ButtonText["facebook"]}
            </Button>
          </Stack>

          <Stack direction="row" sx={{ justifyContent: "center", margin: 1 }}>
            <Typography sx={{ mr: 1 }}>Don't have an account?</Typography>
            <Typography sx={{ fontWeight: 950, cursor: "pointer" }}>
              Request Now
            </Typography>
          </Stack>
        </AuthFormBox>
      </Stack>

      <Stack
        sx={{ alignItems: "center", margin: 2, height: "calc(100vh - 24px)" }}
      >
        <Typography sx={{ fontWeight: 950 }}>
          Copyright @wework 2022 | Privacy Policy
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
