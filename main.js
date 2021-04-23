async function logIn() {
  let user = await Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate();
  }
  console.log("logged in user:", user);
  document.getElementById("btn-login").style.display = "none";
  document.getElementById("certs").style.display = "block";
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("btn-login").style.display = "inline";
  document.getElementById("certs").style.display = "none";
}

async function setCert() {
  console.log("Sending cert to the smart contract...");
  window.web3 = await Moralis.Web3.enable();
  let contractInstance = new web3.eth.Contract(
    window.abi,
    "0x20eA1C6428fe4A9e22427457FEa7659457354f79"
  );
  contractInstance.methods
    .addStudentCert(
      "Kramer",
      "Watson",
      "Pathstream",
      "AR",
      "Congrats yo!",
      "4-24-21"
    )
    .send({ value: 1000000000000000000, from: ethereum.selectedAddress })
    .on("receipt", function (receipt) {
      console.log("RECEIPT: ", receipt);
    });
}

document.getElementById("btn-login").onclick = logIn;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("sc-btn").onclick = setCert;
