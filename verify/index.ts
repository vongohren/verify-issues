import { transmute } from "./transmute";
import { digitalbazaar } from "./digitalbazaar";

import { lowJsonLDSignaturesLevelVerify } from "./low-level-verification";

// import vc from './simpler-and-working-vc.json';
import vc from './complex-non-working-vc.json';

const main = async  () => {
  console.log("========================")
  console.log("VERIFYING WITH TRANSMUTE")
  console.log("========================")
  await transmute(vc);
  console.log("========================")
  console.log("VERIFYING WITH DIGITAL BAZAAR")
  console.log("========================")
  await digitalbazaar(vc);
  console.log("========================")
  console.log("VERIFYING WITH LOW LEVEL JSON LD SIGNATURES")
  console.log("========================")
  await lowJsonLDSignaturesLevelVerify(vc);
  
}

main()
