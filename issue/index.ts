import 'core-js/actual/structured-clone';
import { transmute } from "./transmute-issue";
import { digitalbazaar, digitalbazaarMultiIssue } from "./db-issue";

import { Ed25519KeyPair } from '@transmute/ed25519-key-pair';

// import { signableSimpleTemplate as template, jwkKeyTest } from './fixture';
import { signableComplexTemplate as template, jwkKeyTest, jwkKeyTest2, jwkKeyTest3 } from './fixture';

const main = async  () => {

  //@ts-ignore
  const rightKey = await Ed25519KeyPair.from(jwkKeyTest);
  //@ts-ignore
  const rightKey2 = await Ed25519KeyPair.from(jwkKeyTest2);
  //@ts-ignore
  const rightKey3 = await Ed25519KeyPair.from(jwkKeyTest3);
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

  console.log("========================")
  console.log("MULTI ISSUEING WITH DIGITAL BAZAAR")
  console.log("========================")
  //@ts-ignore
  const templateForDbMulti = structuredClone(template);
  await digitalbazaarMultiIssue(templateForDbMulti, [rightKey, rightKey2,rightKey3])
  
}

main()
