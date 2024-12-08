import { useState } from "react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Press Start 2P"].join(","),
    h1: {
      fontSize: "48px",
      textShadow: "0 5px #000000",
    },
    body1: {
      fontFamily: ["VT323"].join(","),
      fontSize: "32px",
      letterSpacing: "-5.5%",
      textShadow: "0 2px 2px #000000",
    },
  },
});

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <div className="overlay">
        <div className="App">
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
        <div className="moving-background"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
