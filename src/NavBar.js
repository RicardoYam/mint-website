import React from "react";
import { Link, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import facebookIcon from "./assets/facebook.png";
import twitterIcon from "./assets/twitter.png";

const CustButton = styled(Button)({
  fontSize: "1rem",
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#b85474",
  boxShadow: "0px 2px 2px 1px #0f0f0f",
  textTransform: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#a13f5e",
    boxShadow: "0px 2px 2px 1px #0f0f0f",
  },
});

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    // Metamask injection
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center p-12">
        {/* Left side - Social Media Icons */}
        <div className="flex items-center gap-12">
          <Link href="#">
            <img
              src={facebookIcon}
              alt="facebook"
              style={{
                width: 32,
                height: 32,
                boxShadow: "0px 2px 2px 1px #0f0f0f",
              }}
            />
          </Link>
          <Link href="#">
            <img
              src={twitterIcon}
              alt="twitter"
              style={{
                width: 32,
                height: 32,
                boxShadow: "0px 2px 2px 1px #0f0f0f",
              }}
            />
          </Link>
        </div>

        {/* Right side - Sections and Connect */}
        <div className="flex items-center gap-12">
          <div>About</div>
          <div>Mint</div>
          <div>Team</div>
          {isConnected ? (
            <p style={{ color: "#b85474", textShadow: "0 2px 2px #000000" }}>
              Connected
            </p>
          ) : (
            <CustButton variant="contained" onClick={connectAccount}>
              Connect
            </CustButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
