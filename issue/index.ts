import { transmute } from "./transmute-issue";
import { digitalbazaar } from "./db-issue";

import { Ed25519KeyPair } from '@transmute/ed25519-key-pair';

// import { signableSimpleTemplate as template, jwkKeyTest } from './fixture';
import { signableComplexTemplate as template, jwkKeyTest } from './fixture';

const main = async  () => {

  //@ts-ignore
  const rightKey = await Ed25519KeyPair.from(jwkKeyTest);
  console.log("========================")
  console.log("ISSUEING WITH TRANSMUTE")
  console.log("========================")
  await transmute(template, rightKey);
  console.log("========================")
  console.log("ISSUEING WITH DIGITAL BAZAAR")
  console.log("========================")
  await digitalbazaar(template, rightKey);
  
}

main()
