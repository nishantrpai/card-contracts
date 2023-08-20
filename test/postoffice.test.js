/**
 * Run: npx hardhat run --network hardhat test/postoffice.test.js
 */
const { expect } = require("chai");

async function main() {
  const PostOffice = await ethers.getContractFactory("PostOffice");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await PostOffice.deploy();
  console.log("Contract deployed to address:", hello_world.address);

  await hello_world.mint('0x2546BcD3c84621e976D8185a91A922aE77ECEc30','test',"<path d='M0 3V5H1V3L2 3V5H3V3V2V1V0H2H1H0V1V2V3ZM1 2H2V1H1V2Z'/>");
  console.log(await hello_world.writedebug(0));
  console.log(await hello_world.uri(0));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
