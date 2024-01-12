import Web3 from "web3";
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/4a4475e6bd2f4e529ebf1b0a4b1419a6"
  );
  web3 = new Web3(provider);
}
 
export default web3;

// import Web3 from "web3";

// let web3;

// if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined')
// {
//     // we are in the browser and metamask is running
//     window.ethereum.request({ method: "eth_requestAccounts" });
//     web3 = new Web3(window.ethereum);
// }
// else
// {
//     // we are on the server *OR* the user is not running metamask
//     // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
//     const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/xxx_your_key_here_xxx");
//     web3 = new Web3(provider);
// }

// export default web3;