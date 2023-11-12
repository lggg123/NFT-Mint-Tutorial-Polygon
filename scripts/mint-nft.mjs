const CONTRACT_ADDRESS = "0xA244fd098asdfadfgA"
const META_DATA_URL = "ipfs://bafyreibnu4dtxtuj2efwbd6easdfsdgc3vbvi74t67hzxe7emcwe/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("NFT")
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