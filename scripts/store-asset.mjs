import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

async function storeAssets(fileNames) {
   const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
   for (const fileName of fileNames) {
    const metadata = await client.store({
        name: fileName,
        description: `A 3D generated image of ${fileName}`,
        image: new File(
            [await fs.promises.readFile(`assets/${fileName}.png`)],
            `${fileName}.png`,
            { type: 'image/png' }
        ),
    });
    console.log(`Metadata for ${fileName} stored on Filecoin and IPFS with URL: ${metadata.url}`);
   }
}

const fileNames = ["Palm Beach House #1", "Palm Beach House #2", "Palm Beach House #3", "Palm Beach House #4", "Palm Beach House #5", "Palm Beach House #6", "Palm Beach House #7", "Palm Beach House #8", "Palm Beach House #9", "Palm Beach House #10"];

storeAssets(fileNames)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });