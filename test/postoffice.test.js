/**
 * Run: npx hardhat run --network hardhat test/postoffice.test.js
 */
const { expect } = require("chai");

async function main() {
  const PostOffice = await ethers.getContractFactory("PostOffice");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await PostOffice.deploy();
  console.log("Contract deployed to address:", hello_world.address);
  await hello_world.setCurrentStamp('https://opepenai.nyc3.digitaloceanspaces.com/images/db08d599-7596-479e-a126-2523f96bf424@lg.png');
  await hello_world.mint('0x2546BcD3c84621e976D8185a91A922aE77ECEc30','test','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAwIDE1MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3NSI+PHBhdGggZD0iTSA0Ny4xMDUsMTEzLjI1MCBDIDQ3LjUwMCwxMDguNDA5IDQ3LjEwNSwxMDguNDMyIDQ3LjEwNSwxMDMuNjEzIiBzdHJva2Utd2lkdGg9IjUuMzYzIiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA0Ny4xMDUsMTAzLjYxMyBDIDQ2LjY0OSw5MS40MzMgNDYuMTE3LDkxLjU4MyA0NC4zNDAsNzkuNTk4IiBzdHJva2Utd2lkdGg9IjIuNzk4IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA0NC4zNDAsNzkuNTk4IEMgNDAuNjM4LDY0LjM2MiA0MS4zNDYsNjQuMjUwIDM2LjUwMCw0OS4yNDYiIHN0cm9rZS13aWR0aD0iMi4xNjkiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDM2LjUwMCw0OS4yNDYgQyAzMy4xMDgsMzYuNzM3IDMzLjA4MCwzNi43NTQgMjkuMjIzLDI0LjM4MyIgc3Ryb2tlLXdpZHRoPSIyLjIxMCIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjkuMjIzLDI0LjM4MyBDIDIyLjIwNCwxLjI3MiAyNS41NDcsMTIuNjk0IDIxLjM3OSwxLjE2MCIgc3Ryb2tlLXdpZHRoPSIyLjM3NyIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjEuMzc5LDEuMTYwIEMgMjIuNTIwLDEyLjk1NCAyMC41OTYsMS4wNTQgMjYuMDA4LDIzLjk0NSIgc3Ryb2tlLXdpZHRoPSIzLjY3MyIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjYuMDA4LDIzLjk0NSBDIDI5LjI4NiwzMS41MDMgMjguNDcxLDMxLjcwNiAzMy4yODEsMzguNjY0IiBzdHJva2Utd2lkdGg9IjMuMDY1IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAzMy4yODEsMzguNjY0IEMgMzguMDM5LDQ3LjQxOSAzOC4xMDgsNDcuMzE3IDQzLjY1Miw1NS41NzQiIHN0cm9rZS13aWR0aD0iMi43MjEiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDQzLjY1Miw1NS41NzQgQyA0OC4wMDcsNjEuNjI2IDQ3Ljg0OSw2MS42NzEgNTIuOTAyLDY3LjE2OCIgc3Ryb2tlLXdpZHRoPSIyLjk2NSIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gNTIuOTAyLDY3LjE2OCBDIDU1LjA5OSw2OS42NzMgNTUuMDUyLDY5LjYwMiA1Ny43NDIsNzEuNTI3IiBzdHJva2Utd2lkdGg9IjMuNjk1IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA1Ny43NDIsNzEuNTI3IEMgNjAuMDgyLDczLjEyOCA1OS45ODIsNzMuMDk5IDYyLjY2OCw3NC4wMjAiIHN0cm9rZS13aWR0aD0iNC4xMDIiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDYyLjY2OCw3NC4wMjAgQyA2NS44NjYsNzUuODU4IDY1LjMzOCw3NC45NDAgNjguMjU0LDc1LjE1MiIgc3Ryb2tlLXdpZHRoPSI0LjE3OSIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gNjguMjU0LDc1LjE1MiBDIDcwLjMxOSw3My40MjEgNzAuNDcxLDc0LjQ5NyA3MS44NzksNzEuMjk3IiBzdHJva2Utd2lkdGg9IjQuMjk1IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA3MS44NzksNzEuMjk3IEMgNzQuOTMwLDY3LjIwMiA3NC44NzAsNjcuMjI0IDc3LjM1NSw2Mi43NTgiIHN0cm9rZS13aWR0aD0iMy43ODIiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDc3LjM1NSw2Mi43NTggQyA4MC40MzgsNTYuODE5IDgwLjU0Nyw1Ni45MDkgODMuMTEzLDUwLjcxMSIgc3Ryb2tlLXdpZHRoPSIzLjMxNyIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODMuMTEzLDUwLjcxMSBDIDg0LjE0NCw0Ny42OTEgODQuMzkyLDQ3Ljc5MiA4NS4yNjIsNDQuNzAzIiBzdHJva2Utd2lkdGg9IjMuODIzIiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA4NS4yNjIsNDQuNzAzIEMgODYuNzM4LDM4LjI4OCA4Ni4yNTMsNDIuMDU0IDg3LjMzMiwzOS40MzgiIHN0cm9rZS13aWR0aD0iNC40OTUiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDg3LjMzMiwzOS40MzggQyA4OC4wMjcsNDUuODkyIDg4LjY5Myw0Mi4wNzAgODkuMTcyLDUyLjI2NiIgc3Ryb2tlLXdpZHRoPSI0LjU4NiIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODkuMTcyLDUyLjI2NiBDIDkwLjQzMSw1OC4yOTAgOTAuMjU5LDU4LjMxOCA5MS43OTcsNjQuMjg5IiBzdHJva2Utd2lkdGg9IjMuNTAyIiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA5MS43OTcsNjQuMjg5IEMgOTIuNjAwLDY4LjM2NiA5Mi43MTYsNjguMzI5IDkzLjc0Miw3Mi4zNDQiIHN0cm9rZS13aWR0aD0iMy42OTMiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDkzLjc0Miw3Mi4zNDQgQyA5NC4yMTMsNzUuNzE1IDk0LjYxOCw3NS4zOTQgOTUuODMyLDc4LjM0NCIgc3Ryb2tlLXdpZHRoPSIzLjk2NSIgc3Ryb2tlPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTUuODMyLDc4LjM0NCBDIDk3LjgyOCw4Mi45OTQgOTcuMTg5LDgwLjU0NyA5OS42OTUsODIuMDA4IiBzdHJva2Utd2lkdGg9IjQuNTU0IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA5OS42OTUsODIuMDA4IEMgMTA1LjgxNSw3Ni42MzMgMTA1LjM0Myw3OS4wMjUgMTEwLjg2Myw3MC40MDYiIHN0cm9rZS13aWR0aD0iMy45NTMiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDExMC44NjMsNzAuNDA2IEMgMTE0LjU2OCw2NC45NzUgMTE0Ljk4MSw2NS4zMjYgMTE4LjAyNyw1OS4zOTUiIHN0cm9rZS13aWR0aD0iMy4zNzMiIHN0cm9rZT0icmdiKDI1NSwgMjU1LCAyNTUpIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=');
  await hello_world.sign(0, 'test signature new');
  console.log(await hello_world.writedebug(0));
  console.log(await hello_world.uri(0));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
