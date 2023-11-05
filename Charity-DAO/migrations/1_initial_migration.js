const Migrations = artifacts.require("CharityDAO");

module.exports = async function (deployer) {
  deployer.deploy(CharityDAO);
};
