import {Ed25519Signature2018} from '@digitalbazaar/ed25519-signature-2018';
import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;

import { DocumentLoader } from './document-loader';


export const lowJsonLDSignaturesLevelVerify = async  (vcFile) => {

  const documentLoaderClass = new DocumentLoader('digitalbazaar');

  const suite = new Ed25519Signature2018();

  const result = await jsigs.verify(vcFile, {
    suite,
    purpose: new AssertionProofPurpose(),
    documentLoader: documentLoaderClass.documentLoader
  });

  console.log(result);
}   