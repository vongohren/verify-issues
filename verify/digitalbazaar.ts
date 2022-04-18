import vc from '@digitalbazaar/vc';
import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';

import { DocumentLoader } from './document-loader';


export const digitalbazaar = async  (vcFile) => {

  const documentLoaderClass = new DocumentLoader('digitalbazaar');

  const suite = new Ed25519Signature2018();

  const result = await vc.verifyCredential({
    credential: vcFile,
    // @ts-ignore 
    suite,
    documentLoader: documentLoaderClass.documentLoader
  });

  console.log(result);
}
