# Ethereum Transaction Viewer

A script to export a list of transactions in CSV format.

```
npm install

node view.js 0x0000000000000000000000000000000000000000 > example.csv

Output is like below

Date,Time,Type,Asset,Value,From,To,Transaction
21/08/2022,09:41:25,external,ETH,0.05,0x5d212afb2d1bade2b0984e20eeb5a0b8e0aea57f,0xfa544e7c7b4e29cc3fe463e21c548ce43176f1b2,https://goerli.etherscan.io/tx/0x1202defbc05a8d61dfcfca8d6e9ea01c197fd37d18146e75644175c0bc3eac4c
30/09/2022,03:46:12,erc20,USDC,5000,0xd584d128a8d286e4a6fa07e0efe6cb8af94e350d,0xfa544eec7b4e29cc3f2463e21c548ce43176f1b2,https://goerli.etherscan.io/tx/0x3ece34382ca71f3f38794562179396f9f961a6be7514a0d9857c740837e5e482
