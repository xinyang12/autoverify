const Killable = artifacts.require("Killable");

module.exports = function(deployer) {
  deployer.deploy(Killable);
};
