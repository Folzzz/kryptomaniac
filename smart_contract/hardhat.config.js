// https://eth-ropsten.alchemyapi.io/v2/SQj7CiWXRzkAmNfT1Cmg5s9xKyyk8bRD

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SQj7CiWXRzkAmNfT1Cmg5s9xKyyk8bRD',
      accounts: [ process.env.PRIVATE_KEY ],
      // accounts: [ '34c5ceb97983332277aa4655aae16cbd20dd11a544748164c85058c2ed8810a3' ]
    }
  }
}