const express = require('express');
const Web3 = require('web3');
const app = express();
const port = 3000;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const contractABI = [
    // Add ABI here
];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/', (req, res) => {
  res.send('Decentralized Voting System Backend');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
