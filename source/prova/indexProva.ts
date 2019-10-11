import { EdificioComercial } from "./edificioComercial";
import { Cidade } from "./cidade";
import { Residencial } from "./residencial";
import { Comercial } from "./comercial";
import { Industrial } from "./industrial";
import { Casa } from "./casa";
import { EdificioResidencial } from "./edificioResidencial";
import { Industria } from "./industria";

let areaResidencial = new Residencial(2799);
let areaComercial   = new Comercial(5000);
let areaIndustrial  = new Industrial(100000);

let imovelResidencial  = new EdificioResidencial();
let imovelResidencial2 = new EdificioResidencial();
let imovelComercial    = new EdificioComercial();
let imovelIndustrial   = new Industria();


let cidade = new Cidade();

cidade.adicionarArea(areaResidencial);
cidade.adicionarArea(areaComercial);
cidade.adicionarArea(areaIndustrial);

cidade.adicionarImovel(imovelResidencial);
cidade.adicionarImovel(imovelResidencial2);

cidade.adicionarImovel(imovelComercial);

cidade.adicionarImovel(imovelIndustrial);