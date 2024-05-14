import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const App = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);

    const contractABI = [
        // Add ABI here
    ];
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const votingContract = new web3.eth.Contract(contractABI, contractAddress);
    setContract(votingContract);

    const candidatesCount = await votingContract.methods.candidatesCount().call();
    const candidatesList = [];
    for (let i = 0; i < candidatesCount; i++) {
      const candidate = await votingContract.methods.candidates(i).call();
      candidatesList.push(candidate);
    }
    setCandidates(candidatesList);
  };

  const vote = async (candidateId) => {
    await contract.methods.vote(candidateId).send({ from: account });
    setHasVoted(true);
  };

  return (
    <div>
      <h1>Decentralized Voting System</h1>
      <p>Your account: {account}</p>
      <h2>Candidates</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <p>{candidate.name}</p>
          <button onClick={() => vote(candidate.id)} disabled={hasVoted}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default App;
