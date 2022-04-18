import { verifiable } from '@transmute/vc.js';
import { Ed25519Signature2018, Ed25519VerificationKey2018 } from '@transmute/ed25519-signature-2018';

import { docLoader as documentLoader } from './document';


export const transmute = async  (vcData, key) => {
    const jwk = await key.export({
        privateKey: true,
        type: 'Ed25519VerificationKey2018',
      });
      const verificationKey = await Ed25519VerificationKey2018.from(jwk);
    const suite = new Ed25519Signature2018({ key: verificationKey })

    const output = await verifiable.credential.create({
      credential: vcData,
      documentLoader: documentLoader,
      suite: suite,
    });

    const items = output.items;
    const signedDocument = items[0];

    console.log(JSON.stringify(signedDocument));
}
