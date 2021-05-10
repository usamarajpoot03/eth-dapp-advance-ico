const MyToken = artifacts.require("MyToken");

require("dotenv").config({
  path: "../.env",
});

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;

const expect = chai.expect;

contract("MyToken Test", async (accounts) => {
  const [deployerAccount, recipientAccount, anotherAccount] = accounts;

  beforeEach(async () => {
    this.token = await MyToken.new(1618670234);
  });

  //   it("All tokens should be in deployer account ", async () => {
  //     let instance = this.token;
  //     let totalSupply = await instance.totalSupply();

  //     return expect(
  //       instance.balanceOf(deployerAccount)
  //     ).to.eventually.be.a.bignumber.equal(totalSupply);
  //   });

  //   it("It should be able to send tokens between accounts ", async () => {
  //     const sendToken = 1;
  //     let instance = this.token;
  //     let totalSupply = await instance.totalSupply();

  //     expect(
  //       instance.balanceOf(deployerAccount)
  //     ).to.eventually.be.a.bignumber.equal(totalSupply);
  //     expect(instance.transfer(recipientAccount, sendToken)).to.eventually.be
  //       .fulfilled;
  //     expect(
  //       instance.balanceOf(deployerAccount)
  //     ).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendToken)));
  //     return expect(
  //       instance.balanceOf(recipientAccount)
  //     ).to.be.eventually.be.a.bignumber.equal(new BN(sendToken));
  //   });

  //   it("Its not possible to send more tokens than available", async () => {
  //     let instance = this.token;
  //     let balanceOfDeployer = await instance.balanceOf(deployerAccount);

  //     expect(instance.transfer(recipientAccount, balanceOfDeployer + 1)).to
  //       .eventually.be.rejected;
  //     return expect(
  //       instance.balanceOf(deployerAccount)
  //     ).to.eventually.be.a.bignumber.equal(balanceOfDeployer);
  //   });
});
