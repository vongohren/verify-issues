import { transmute } from "./transmute";
import { digitalbazaar } from "./digitalbazaar";

import vc from './vc3.json';

const main = async  () => {

  // await transmute(vc);
  await digitalbazaar(vc);
  
}

main()
