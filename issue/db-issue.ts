import vc from '@digitalbazaar/vc';
import { Ed25519Signature2018 as DBED } from '@digitalbazaar/ed25519-signature-2018';
import {Ed25519VerificationKey2018 as DBVK} from
  '@digitalbazaar/ed25519-verification-key-2018';

import { docLoader as documentLoader } from './document';


export const digitalbazaar = async  (vcData, key) => {
    const jwk = await key.export({
        privateKey: true,
        type: 'Ed25519VerificationKey2018',
      });
    const verificationKey = await DBVK.from(jwk);
    const suite = new DBED({ key: verificationKey })

    const signedVC = await vc.issue({credential: vcData, suite, documentLoader});
    console.log(JSON.stringify(signedVC, null, 2));

    console.log(JSON.stringify(signedVC));
}
