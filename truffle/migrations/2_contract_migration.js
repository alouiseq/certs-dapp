const CertsContract = artifacts.require("CertsContract");

module.exports = async function (deployer) {
  await deployer.deploy(CertsContract);
  let instance = await CertsContract.deployed();
  instance.fundContract({ value: 100000000000000 });
};
