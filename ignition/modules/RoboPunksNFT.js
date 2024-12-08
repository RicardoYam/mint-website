// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
require("@nomiclabs/hardhat-etherscan");

module.exports = buildModule("RoboPunksModule", (m) => {
  const RoboPunksContract = m.contract("RoboPunksNFT", []);

  return { RoboPunksContract };
});
