import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import ComboBox from "../componnents/customSelect/CustonSelect.js";
import CustonSelect from "../componnents/customSelect/CustonSelect.js";
const top100Films = [];

export default function Home({ options, showCheckmark }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const handleThemeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={handleThemeChange} /> Toggle Dark
      Mode
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <Box marginLeft={"16px"}>
          <CustonSelect
            dropdownPosition={"bottom-start"}
            showCheckmark={true}
            searchOff={false}
          />
        </Box>

        <Box marginLeft={"16px"}>
          <CustonSelect
            dropdownPosition={"top"}
            showCheckmark={false}
            searchOff={true}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
