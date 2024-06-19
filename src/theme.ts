import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    btnHL: true;
    btnSL: true;
    btn0: true;
    btn1: true;
    btn2: true;
    btn3: true;
    btn4: true;
  }
}

// A custom theme for this app
const initialTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1450,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

const theme = createTheme(initialTheme, {
  palette: {
    btnHL: initialTheme.palette.augmentColor({
      color: {
        main: "#ff6161",
      },
    }),
    btnSL: initialTheme.palette.augmentColor({
      color: {
        main: "#ffa333",
      },
    }),
    btn0: initialTheme.palette.augmentColor({
      color: {
        main: "#b4cc00",
      },
    }),
    btn1: initialTheme.palette.augmentColor({
      color: {
        main: "#44cc00",
      },
    }),
    btn2: initialTheme.palette.augmentColor({
      color: {
        main: "#00cc2c",
      },
    }),
    btn3: initialTheme.palette.augmentColor({
      color: {
        main: "#00cca0",
      },
    }),
    btn4: initialTheme.palette.augmentColor({
      color: {
        main: "#5c92ff",
      },
    }),
  },
});

export default theme;
