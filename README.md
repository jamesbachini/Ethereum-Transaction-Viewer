# Ethereum Transaction Viewer

A script to export a list of transactions in CSV format.

```
npm install

node view.js 0x0000000000000000000000000000000000000000 > example.csv

Output is like below

Type,Asset,Value,From,To,Transaction
erc20,USDC,800,0xfa544e7c7b4e29cc3f2463321c548ce43176f1b2,0x76e74a1ad6f7342a210763b656017664b3c07de1,https://goerli.etherscan.io/tx/0x23bb7d8a71d991219c3fd8e63df950268f6d7aeff587003bda32c475bc5f67cf
erc20,USDC,850,0xfa544e7c7b4e29cc322463e21c548ce43176f1b2,0xffbe852b8f33cc101d76f4e2c59ebc1364866c35,https://goerli.etherscan.io/tx/0x68038d78ef209e2174177ee903ace1e8d33750a6ef44461026c16e07dbd50a2d
erc20,USDC,900,0xfa544e7c7b4e29cc322463e21c548ce43176f1b2,0xb07e41014b302102841cce3c5f122ddab9f32a38,https://goerli.etherscan.io/tx/0xba1fa3291f9c279bb03fe713f802eaed80a1539300454de076eac71cf24a5d3e