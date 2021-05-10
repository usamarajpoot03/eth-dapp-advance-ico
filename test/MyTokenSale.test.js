// const MyToken = artifacts.require("MyToken");
// const MyTokenSale = artifacts.require("MyTokenSale");
// const KYCContract = artifacts.require("KYCContract");

// require("dotenv").config({
//   path: "../.env",
// });

// const chai = require("./chaiSetup.js");
// const { token } = require("./MyToken.test.js");
// const BN = web3.utils.BN;

// const expect = chai.expect;

// contract("MyTokenSale Test", async (accounts) => {
//   const [deployerAccount, recipientAccount, anotherAccount] = accounts;

//   it("there should be no token in deployerAccount ", async () => {
//     let instance = await MyToken.deployed();
//     return expect(
//       instance.balanceOf(deployerAccount)
//     ).to.eventually.be.a.bignumber.equal(new BN(0));
//   });

//   it("all tokens should be in token sale smart contract by default", async () => {
//     let instance = await MyToken.deployed();
//     let instanceOfMyTokenSale = await MyTokenSale.deployed();

//     const totalSupply = await instance.totalSupply();
//     // return expect(instance.balanceOf(instanceOfMyTokenSale.address)).to.eventually.be.a.bignumber.equal(new BN(process.env.INITIAL_TOKENS));
//     return expect(
//       instance.balanceOf(MyTokenSale.address)
//     ).to.eventually.be.a.bignumber.equal(totalSupply);
//   });

//   it("should be able to buy tokens ", async () => {
//     const myTokenInstance = await MyToken.deployed();
//     const myTokenSaleInstance = await MyTokenSale.deployed();
//     const balanceOfDeployer = await myTokenInstance.balanceOf(deployerAccount);
//     const instanceOfKYCContract = await KYCContract.deployed();

//     expect(
//       myTokenSaleInstance.sendTransaction({
//         from: deployerAccount,
//         value: web3.utils.toWei("1", "wei"),
//       })
//     ).to.eventually.be.rejected;
//     expect(
//       myTokenInstance.balanceOf(deployerAccount)
//     ).to.eventually.be.a.bignumber.equal(balanceOfDeployer);

//     //adding deployer account to whitelist by the deoplyer who is also the owner
//     await instanceOfKYCContract.setKycCompleted(deployerAccount);

//     expect(
//       myTokenSaleInstance.sendTransaction({
//         from: deployerAccount,
//         value: web3.utils.toWei("1", "wei"),
//       })
//     ).to.eventually.be.fulfilled;
//     return expect(
//       myTokenInstance.balanceOf(deployerAccount)
//     ).to.eventually.be.a.bignumber.equal(balanceOfDeployer.add(new BN(1)));
//   });
// });
