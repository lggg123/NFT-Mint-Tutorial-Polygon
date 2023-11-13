const CONTRACT_ADDRESS = "0x83F35B64eB2AE560da64930aB1384552bb3c323d"
const META_DATA_URL = "ipfs://bafyreibk4pvi2ih3cmtgeyg7alg3hnibzeem347euoks3y5zrxezeijw5q/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("NFTCollection")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });