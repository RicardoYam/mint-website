import { useState } from "react";
import { ethers, BigNumber } from "ethers"; // similar with web3js
import roboPunksNFT from "./RoboPunksNFT.json";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const roboPunksNFTAddress = "0x67Cd3E96524E9fd15B1A9a3dF15311C441844050";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    // if metamask logged in
    if (window.ethereum) {
      // connect to blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        // call contract "mint" function
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

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

  const StyledInput = styled("input")({
    width: "60px",
    height: "30px",
    fontSize: "1rem",
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    paddingLeft: "15px",
    cursor: "default",
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center pb-56">
      <div className="w-1/3">
        <Typography variant="h1">RoboPunks</Typography>
        <Typography variant="body1">
          It's 2078. Can the RoboPunks NFT save humans from destructive rampant
          NFT sepculation? Mint RoboPunks to find out.
        </Typography>
      </div>

      {isConnected ? (
        <div className="flex flex-col mt-8">
          <div className="flex justify-center items-center">
            <CustButton variant="contained" onClick={handleDecrement}>
              -
            </CustButton>
            <StyledInput type="number" value={mintAmount} readOnly />
            <CustButton variant="contained" onClick={handleIncrement}>
              +
            </CustButton>
          </div>
          <div className="mt-4">
            <CustButton variant="contained" onClick={handleMint}>
              Mint Now
            </CustButton>
          </div>
        </div>
      ) : (
        <p
          style={{
            color: "#b85474",
            marginTop: "32px",
            textShadow: "0 2px 2px #000000",
          }}
        >
          You must connect to mint.
        </p>
      )}
    </div>
  );
};

export default MainMint;
