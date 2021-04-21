async function logIn() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate();
  }
  console.log("logged in user:", user);
  document.getElementById("btn-login").style.display = "none";
  document.getElementById("game").style.display = "block";
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("btn-login").style.display = "inline";
  document.getElementById("game").style.display = "none";
}

async function flip(side) {
  const amount = document.getElementById("amount").value;
  console.log(side + " " + amount);
}

document.getElementById("btn-login").onclick = logIn;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("heads-btn").onclick = () => flip("heads");
document.getElementById("tails-btn").onclick = () => flip("tails");
