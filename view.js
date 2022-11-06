import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI, // Goerli
};

const alchemy = new Alchemy(settings);

let address = process.argv[2];
const lookup = async () => {
	const fromTransactions = await alchemy.core.getAssetTransfers({
		fromBlock: "0x0",
		toBlock: "latest",
		fromAddress: address,
		category:  ["external", "internal", "erc20"]
	});
	const toTransactions = await alchemy.core.getAssetTransfers({
		fromBlock: "0x0",
		toBlock: "latest",
		toAddress: address,
		category:  ["external", "erc20"]
	});
	const cleaned = [];
	fromTransactions.transfers.forEach((t) => {
		cleaned.push(t);
	});
	toTransactions.transfers.forEach((t) => {
		cleaned.push(t);
	});
	cleaned.sort((a,b) => a.blockNum - b.blockNum);
	console.log(`Date,Time,Type,Asset,Value,From,To,Transaction`);
	for (let i = 0; i < cleaned.length; i++) {
		await new Promise(r => setTimeout(r, 100)); // slow down to avoid rate limiting?
		const t = cleaned[i];
		//console.log(t)
		const block = await alchemy.core.getBlock(t.blockNum);
		const date = new Date(block.timestamp * 1000);
		t.time = date.toLocaleString().toString().replace(' ','')
		console.log(`${t.time},${t.category},${t.asset},${t.value},${t.from},${t.to},https://goerli.etherscan.io/tx/${t.hash}`);
	}
}

lookup();