import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

import { MyEpicGame__factory } from "../../src/types/factories/MyEpicGame__factory";
import { MyEpicGame } from "../../src/types/MyEpicGame";

task("deploy", "compiles and deploys the contracts", async (args, hre) => {
  const gameContractFactory: MyEpicGame__factory = <MyEpicGame__factory>(
    await hre.ethers.getContractFactory("MyEpicGame")
  );
  const gameContract: MyEpicGame = <MyEpicGame>await gameContractFactory.deploy(
    ["Peter", "Catherine", "Orlo"], // Names
    [
      "https://media.giphy.com/media/S3V93tk356GS11Yh9b/giphy.gif",
      "https://media.giphy.com/media/XcXmoCz2pSvoiitFZy/giphy.gif",
      "https://media.giphy.com/media/gffhzFSPcRt7FifIRP/giphy.gif",
    ], // Images
    [500, 100, 325], // HP values
    [100, 125, 25], // Attack values
    "Gillian Anderson",
    "https://media.giphy.com/media/878qieS0B7svsmeTN0/giphy.gif",
    10000,
    99,
  );
  await gameContract.deployed();

  console.log("MyEpicGame deployed to:", gameContract.address);

  // let txn;
  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();

  // txn = await gameContract.mintCharacterNFT(0);
  // await txn.wait();

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // const tokenURI = await gameContract.tokenURI(1);
  // console.log("Token URI:", tokenURI);
});
