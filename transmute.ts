import { verifiable } from "@transmute/vc.js";
import { Ed25519Signature2018 } from '@transmute/ed25519-signature-2018';

import { DocumentLoader } from './document-loader';


export const transmute = async  (vcFile) => {

  const documentLoaderClass = new DocumentLoader('transmute');

  const result = await verifiable.credential.verify({
    credential: vcFile,
    format: ["vc"],
    documentLoader: documentLoaderClass.documentLoader,
    suite: [new Ed25519Signature2018()],
  });

  console.log(result);
}
