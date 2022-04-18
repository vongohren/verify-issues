import 'core-js/actual/structured-clone';
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
  //@ts-ignore
  const templateForTransmute = structuredClone(template);
  await transmute(templateForTransmute, rightKey);
  console.log("========================")
  console.log("ISSUEING WITH DIGITAL BAZAAR")
  console.log("========================")
  //@ts-ignore
  const templateForDb = structuredClone(template);
  await digitalbazaar(templateForDb, rightKey);
  
}

main()
