require("@nomiclabs/hardhat-waffle");

const projoctId = "dc319fb8db054f96ae949269b77c9d09";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`
    }
  },
  solidity: "0.8.4",
};
