import  RecuperationPKM  from "./Domain/RecuperationPKM/recuperationPKM.js";
import PKMServices from "./Infrastructure/Services/PKMServices.js";

const pkmServices = new PKMServices();
const recuperationPKM = new RecuperationPKM(pkmServices);
recuperationPKM.ChargerPKM();