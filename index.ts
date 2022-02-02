import { verifiable } from "@transmute/vc.js";
import { Ed25519Signature2018 } from '@transmute/ed25519-signature-2018';

import { documentLoader } from './document-loader';

import vc from './vc.json';
import vc2 from './vc2.json';


const main = async  () => {

  const result = await verifiable.credential.verify({
    credential: vc,
    format: ["vc"],
    documentLoader,
    suite: [new Ed25519Signature2018()],
  });

  console.log(result);

  const result2 = await verifiable.credential.verify({
    credential: vc2,
    format: ["vc"],
    documentLoader,
    suite: [new Ed25519Signature2018()],
  });

  console.log(result2);
}

main()
