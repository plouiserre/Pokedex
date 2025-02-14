import IPKMServices from "../../Domain/Port/IPKMServices.js";
import Web from "../Connector/Web.js";

class PKMServices extends IPKMServices{
    async ChargerPKM() {
        const web = new Web();
        web.AppelerPageWeb();
    }
}


export default PKMServices;