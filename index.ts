import { transmute } from "./transmute";
import { digitalbazaar } from "./digitalbazaar";

import { lowJsonLDSignaturesLevelVerify } from "./low-level-verification";

import vc from './simpler-and-working-vc.json';
// import vc from './complex-non-working-vc.json';

const main = async  () => {

  await transmute(vc);
  await digitalbazaar(vc);
  // await lowJsonLDSignaturesLevelVerify(vc);
  
}

main()
