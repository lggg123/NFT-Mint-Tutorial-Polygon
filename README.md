# Script to create NFTs and Mint on OpenSea

## This script mints NFTs on Polygon Mumbai testnet and Polygon Mainnet
 
First in order to start this clone the repo click the green button with the title code on the top right copy the url and type `git clone ` into your terminal and paste the url or also by typing `git clone https://github.com/lggg123/NFT-Mint-Tutorial-Polygon.git` on you terminal.

After the repo has been cloned make sure to type `npm install` to install the appropriate packages

Once this is installed make sure to create a .env file with the Private Key of you Metamask wallet and NFT Storage API key found one nft.storage when you create an account to upload the NFT image.

Add the asset you want to upload and fix the store-asset.mjs appropriately to match the asset in your asset folder that you are looking to upload to nft.storage

Once you have the asset you want uploaded simply type `node scripts/store-asset.mjs` and copy the metadata url to add into the mint-nft.mjs script at the top.

Then make sure to have the appropriate collection name for the NFT.sol contract you are going to deploy in this ecample I use Clownziees, but you can switch it to whatever you like.

Now lets deploy the script by typing this into your terminal `npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai` this selects the PolygonMumbai network first so you can see if your NFT mints properly. If so you can change the network to Polygon to have your NFT minted on the mainnet.

After the script is deployed copy the address which you will also paste into mint-nft.mjs

Double check to make sure that you have both the contract address and metadata url in mint-nft.mjs and not the example ones provided.

Once that is done simply type this in the terminal to mint your NFT. `npx hardhat run scripts/mint-nft.mjs`

Depending on the network you can check your NFT as long as you are logged into the same wallet you grabbed the private key for. If you deployed to Polygon Mumbai testnet simply check on testnets.opensea.io if on the mainnet check on opensea.io