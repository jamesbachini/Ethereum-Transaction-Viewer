import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI, // Goerli
};

const alchemy = new Alchemy(settings);

let address = process.argv[2];

const lookup = async () => {
    const transfers = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toBlock: "latest",
        fromAddress: address,
        category:  ["external", "internal", "erc20"]
      });
    //console.log(transfers);
    transfers.transfers.forEach((t) => {
        console.log(`${t.category},${t.asset},${t.value},${t.from},${t.to},https://goerli.etherscan.io/tx/${t.hash}`);
    });
}

lookup();