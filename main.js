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
    "0x399fDF4BE3e68658E5BA60cd7D7b923F67a8b722"
  );
  contractInstance.methods
    .addStudentCert(
      "Steph",
      "Curry",
      "Pathstream",
      "Unity VR",
      "Congrats yo!",
      "4-24-21"
    )
    .send({ value: 100, from: ethereum.selectedAddress })
    .on("receipt", function (receipt) {
      console.log("RECEIPT: ", receipt);
    });
}

document.getElementById("btn-login").onclick = logIn;
document.getElementById("btn-logout").onclick = logOut;
// document.getElementById("heads-btn").onclick = () => flip("heads");
// document.getElementById("tails-btn").onclick = () => flip("tails");
document.getElementById("sc-btn").onclick = setCert;
