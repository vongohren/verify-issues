import { transmute } from "./transmute";
import { digitalbazaar } from "./digitalbazaar";

import { lowJsonLDSignaturesLevelVerify } from "./low-level-verification";

// import vc from './credentials/simpler-and-working-vc.json';
import vc from './credentials/complex-non-working-vc.json';

import multiVc from './credentials/complex-multiverify-vc.json';

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


  console.log("========================")
  console.log("MULTI SIGNATURE VERIFICATION")
  console.log("========================")


  console.log("========================")
  console.log("MULTI VERIFYING WITH LOW LEVEL JSON LD SIGNATURES")
  console.log("========================")
  
  await lowJsonLDSignaturesLevelVerify(multiVc);

  console.log("========================")
  console.log("MULTI VERIFYING WITH DIGITAL BAZAAR")
  console.log("========================")
  try {
    await digitalbazaar(multiVc);  
  } catch (error) {
    console.log("Failed multi verify with Digital bazaar")
    console.log(error)
  }
  

  console.log("========================")
  console.log("MULTI VERIFYING WITH TRANSMUTE")
  console.log("========================")
  
  try {
    await transmute(multiVc);
  } catch (error) {
    console.log("Failed multi verify with Transmute")
    console.log(error)
  }
  
  
}

main()
