import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xbDc595fA612f1795Ef78092f61E2C123D48dC19e"
)


export default instance;