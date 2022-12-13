const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("MyNFT");
  const nftContract = await contractFactory.deploy();
  await nftContract.deployed();
  console.log("Our contract deployed to:", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
