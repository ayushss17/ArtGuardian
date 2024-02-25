const ArtMarketplace = artifacts.require("ArtMarketplace");

module.exports = async function (deployer) {
  await deployer.deploy(ArtMarketplace, "ArtMarketplace", "ARTM");

  // Get the deployed instance
  const artMarketplaceInstance = await ArtMarketplace.deployed();

  // Set the backend address explicitly
  await artMarketplaceInstance.setBackendAddress("0x91201b629E50dfdD620A826FEEE67C653619f460");

  // Log the contract's state for debugging
  console.log('Contract State:', await artMarketplaceInstance.backendAddress());

  // Access the backendAddress directly
  const backendAddress = await artMarketplaceInstance.backendAddress();

  console.log('Backend Address:', backendAddress);
};
