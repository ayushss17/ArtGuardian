const PaintingMarketplace = artifacts.require("PaintingMarketplace");

module.exports = function (deployer) {
    deployer.deploy(PaintingMarketplace);
};
