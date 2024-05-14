# Decentralized-Voting-System

This project is a decentralized voting system built on the Ethereum blockchain using Solidity for smart contracts, Web3.js for blockchain interaction, Node.js for the backend server, and React.js for the frontend user interface. The system ensures a secure, transparent, and tamper-proof voting process.

## Features

- **Blockchain-based Voting**: Utilizes Ethereum and Solidity smart contracts to handle voting operations.
- **Secure and Transparent**: Ensures security through Public Key Infrastructure (PKI) and SHA-256 hash functions.
- **Responsive UI**: A responsive and user-friendly interface built with React.js.
- **Smart Contract Validations**: Smart contracts validate and record each vote on the blockchain.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache CLI](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/) browser extension

## Project Structure

decentralized-voting-system-/
  contracts/
    Voting.sol
    migrations/
      1_initial_migration.js
      2_deploy_contracts.js
    truffle-config.js
  backend/
    package.json
    server.js
  frontend/
    package.json
    public/
      index.html
    src/
      App.js
      index.js
    README.md



## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ahmadkhan100/Decentralized-voting-system-.git
cd Decentralized-voting-system-

2. Install Truffle and Ganache CLI
npm install -g truffle ganache-cli

3. Compile and Deploy Smart Contracts
Navigate to the contracts directory and compile the smart contracts:

cd contracts
truffle compile

Start Ganache CLI:
ganache-cli

Migrate the contracts to the blockchain:
truffle migrate

4. Start the Backend Server
Navigate to the backend directory, install dependencies, and start the server:
cd ../backend
npm install
npm start


5. Start the Frontend Application
Navigate to the frontend directory, install dependencies, and start the React application:
cd ../frontend
npm install
npm start

6. Interact with the Application
Open your browser and go to http://localhost:3000 to interact with the decentralized voting system.

Contract Deployment
After deploying the contracts, make sure to update the contract address and ABI in both the backend (server.js) and frontend (App.js) to match the deployed contract.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request.



