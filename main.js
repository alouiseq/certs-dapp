async function logIn() {
  let user = await Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate();
  } else {
    alert("Already logged in");
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

async function setCert(program) {
  console.log("Sending cert to the smart contract...");

  const student = "Steph Curry";
  const university = "Harvard";
  const date = "4-23-21";
  const certFile = `${program}_cert.png`;

  window.web3 = await Moralis.Web3.enable();
  let contractInstance = new web3.eth.Contract(
    window.abi,
    "0xc4dFFaeD2566989E6B1Cbe01C02f84c965452024"
  );
  contractInstance.methods
    .addStudentCert(student, university, program, certFile, date)
    .send({ value: 1000000000000000000, from: ethereum.selectedAddress })
    .on("receipt", function (receipt) {
      console.log("RECEIPT: ", receipt);
    });
}

document.getElementById("btn-login").onclick = logIn;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("asana-btn").onclick = () => setCert("asana");
document.getElementById("facebook-btn").onclick = () => setCert("facebook");
document.getElementById("salesforce-btn").onclick = () => setCert("salesforce");
document.getElementById("tableau-btn").onclick = () => setCert("tableau");
