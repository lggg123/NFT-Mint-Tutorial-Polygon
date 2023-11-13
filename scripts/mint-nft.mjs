const CONTRACT_ADDRESS = "0x1F006910ce92CcDcA54E53E0939b1479dE16e"
const META_DATA_URL = "ipfs://bafyreihaxdqu7swu2xhw2ihh5i6exjlvn6bxez3rnye5srn2cmhfi6vy/metadata.json"

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